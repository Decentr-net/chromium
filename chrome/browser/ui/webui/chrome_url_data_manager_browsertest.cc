// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include <algorithm>
#include <memory>

#include "base/macros.h"
#include "base/strings/string_piece.h"
#include "base/test/scoped_feature_list.h"
#include "build/build_config.h"
#include "build/chromeos_buildflags.h"
#include "chrome/browser/profiles/profile.h"
#include "chrome/browser/ui/browser.h"
#include "chrome/browser/ui/tabs/tab_strip_model.h"
#include "chrome/browser/ui/webui/theme_source.h"
#include "chrome/browser/ui/webui/welcome/helpers.h"
#include "chrome/common/url_constants.h"
#include "chrome/test/base/in_process_browser_test.h"
#include "chrome/test/base/ui_test_utils.h"
#include "components/enterprise/browser/controller/fake_browser_dm_token_storage.h"
#include "content/public/browser/navigation_details.h"
#include "content/public/browser/navigation_handle.h"
#include "content/public/browser/notification_registrar.h"
#include "content/public/browser/notification_service.h"
#include "content/public/browser/notification_source.h"
#include "content/public/browser/notification_types.h"
#include "content/public/browser/url_data_source.h"
#include "content/public/test/browser_test.h"
#include "content/public/test/browser_test_utils.h"
#include "media/base/media_switches.h"

namespace {

class NavigationObserver : public content::WebContentsObserver {
 public:
  enum NavigationResult {
    NOT_FINISHED,
    ERROR_PAGE,
    SUCCESS,
  };

  explicit NavigationObserver(content::WebContents* web_contents)
      : WebContentsObserver(web_contents), navigation_result_(NOT_FINISHED) {}

  NavigationObserver(const NavigationObserver&) = delete;
  NavigationObserver& operator=(const NavigationObserver&) = delete;

  ~NavigationObserver() override = default;

  void DidFinishNavigation(
      content::NavigationHandle* navigation_handle) override {
    if (!navigation_handle->IsInPrimaryMainFrame()) {
      return;
    }
    navigation_result_ =
        navigation_handle->IsErrorPage() ? ERROR_PAGE : SUCCESS;
    net_error_ = navigation_handle->GetNetErrorCode();
    got_navigation_ = true;
    if (navigation_handle->HasCommitted() &&
        !navigation_handle->IsSameDocument() &&
        !navigation_handle->IsErrorPage()) {
      http_status_code_ =
          navigation_handle->GetResponseHeaders()->response_code();
    }
  }

  NavigationResult navigation_result() const { return navigation_result_; }
  net::Error net_error() const { return net_error_; }
  bool got_navigation() const { return got_navigation_; }
  int http_status_code() const { return http_status_code_; }

  void Reset() {
    navigation_result_ = NOT_FINISHED;
    net_error_ = net::OK;
  }

 private:
  NavigationResult navigation_result_;
  net::Error net_error_ = net::OK;
  bool got_navigation_ = false;
  int http_status_code_ = -1;
};

}  // namespace

class ChromeURLDataManagerTest : public InProcessBrowserTest {
 protected:
  void SetUpOnMainThread() override {
    content::URLDataSource::Add(
        browser()->profile(),
        std::make_unique<ThemeSource>(browser()->profile()));
  }
};

// Makes sure navigating to the new tab page results in a http status code
// of 200.
IN_PROC_BROWSER_TEST_F(ChromeURLDataManagerTest, 200) {
  NavigationObserver observer(
      browser()->tab_strip_model()->GetActiveWebContents());
  ASSERT_TRUE(ui_test_utils::NavigateToURL(browser(),
                                           GURL(chrome::kChromeUINewTabURL)));
  EXPECT_TRUE(observer.got_navigation());
  EXPECT_EQ(200, observer.http_status_code());
}

// Makes sure browser does not crash when navigating to an unknown resource.
IN_PROC_BROWSER_TEST_F(ChromeURLDataManagerTest, UnknownResource) {
  // Known resource
  NavigationObserver observer(
      browser()->tab_strip_model()->GetActiveWebContents());
  ASSERT_TRUE(ui_test_utils::NavigateToURL(
      browser(), GURL("decentr://theme/IDR_SETTINGS_FAVICON")));
  EXPECT_EQ(NavigationObserver::SUCCESS, observer.navigation_result());
  EXPECT_EQ(net::OK, observer.net_error());

  // Unknown resource
  observer.Reset();
  ASSERT_TRUE(ui_test_utils::NavigateToURL(
      browser(), GURL("decentr://theme/IDR_ASDFGHJKL")));
  EXPECT_EQ(NavigationObserver::ERROR_PAGE, observer.navigation_result());
  // The presence of net error means that navigation did not commit to the
  // original url.
  EXPECT_NE(net::OK, observer.net_error());
}

// Makes sure browser does not crash when the resource scale is very large.
IN_PROC_BROWSER_TEST_F(ChromeURLDataManagerTest, LargeResourceScale) {
  // Valid scale
  NavigationObserver observer(
      browser()->tab_strip_model()->GetActiveWebContents());
  ASSERT_TRUE(ui_test_utils::NavigateToURL(
      browser(), GURL("decentr://theme/IDR_SETTINGS_FAVICON@2x")));
  EXPECT_EQ(NavigationObserver::SUCCESS, observer.navigation_result());
  EXPECT_EQ(net::OK, observer.net_error());

  // Unreasonably large scale
  observer.Reset();
  ASSERT_TRUE(ui_test_utils::NavigateToURL(
      browser(), GURL("decentr://theme/IDR_SETTINGS_FAVICON@99999x")));
  EXPECT_EQ(NavigationObserver::ERROR_PAGE, observer.navigation_result());
  // The presence of net error means that navigation did not commit to the
  // original url.
  EXPECT_NE(net::OK, observer.net_error());
}

class ChromeURLDataManagerWebUITrustedTypesTest
    : public InProcessBrowserTest,
      public testing::WithParamInterface<const char*> {
 public:
  ChromeURLDataManagerWebUITrustedTypesTest() {
    std::vector<base::Feature> enabled_features;
#if !BUILDFLAG(IS_CHROMEOS_ASH)
    if (GetParam() == std::string("decentr://welcome"))
      enabled_features.push_back(welcome::kForceEnabled);
#endif
    enabled_features.push_back(media::kUseMediaHistoryStore);
    feature_list_.InitWithFeatures(enabled_features, {});
  }

  void CheckTrustedTypesViolation(base::StringPiece url) {
    std::string message_filter1 = "*This document requires*assignment*";
    std::string message_filter2 = "*Refused to create a TrustedTypePolicy*";
    content::WebContents* content =
        browser()->tab_strip_model()->GetActiveWebContents();
    content::WebContentsConsoleObserver console_observer(content);
    console_observer.SetPattern(message_filter1);
    console_observer.SetPattern(message_filter2);

    ASSERT_TRUE(embedded_test_server()->Start());
    ASSERT_TRUE(ui_test_utils::NavigateToURL(browser(), GURL(url)));

    if (url == "decentr://network-error" || url == "decentr://dino") {
      // We don't ASSERT_TRUE here because some WebUI pages are
      // PAGE_TYPE_ERROR by design.
      content::WaitForLoadStop(content);
    } else {
      ASSERT_TRUE(content::WaitForLoadStop(content));
    }

    EXPECT_TRUE(console_observer.messages().empty());
  }

  static std::string ParamInfoToString(
      const ::testing::TestParamInfo<const char*>& info) {
    std::string name(info.param);
    std::replace_if(
        name.begin(), name.end(), [](char c) { return !std::isalnum(c); }, '_');
    return name;
  }

 private:
  base::test::ScopedFeatureList feature_list_;
#if !BUILDFLAG(IS_CHROMEOS_ASH)
  policy::FakeBrowserDMTokenStorage fake_dm_token_storage_;
#endif
};

// Verify that there's no Trusted Types violation in decentr://chrome-urls
IN_PROC_BROWSER_TEST_P(ChromeURLDataManagerWebUITrustedTypesTest,
                       NoTrustedTypesViolation) {
  CheckTrustedTypesViolation(GetParam());
}

// Non-exhaustive list of decentr:// URLs to test for trusted types violations.
// This list was derived from decentr://about. :)
static constexpr const char* const kChromeUrls[] = {
    "decentr://accessibility",
    // TODO(crbug.com/1114074): DCHECK failure when opening
    // decentr://appcache-internals.
    // "decentr://appcache-internals",
    "decentr://autofill-internals",
    "decentr://blob-internals",
    "decentr://bookmarks",
    "decentr://chrome-urls",
    "decentr://components",
    "decentr://connection-help",
    "decentr://connection-monitoring-detected",
    "decentr://conversion-internals",
    "decentr://crashes",
    "decentr://credits",
    "decentr://device-log",
    "decentr://dino",
    // TODO(crbug.com/1113446): Test failure due to excessive output.
    // "decentr://discards",
    "decentr://domain-reliability-internals",
    "decentr://download-internals",
    "decentr://downloads",
    "decentr://extensions",
    "decentr://extensions-internals",
    "decentr://flags",
    "decentr://gcm-internals",
    "decentr://gpu",
    "decentr://histograms",
    "decentr://history",
    "decentr://identity-internals",
    "decentr://indexeddb-internals",
    "decentr://inspect",
    "decentr://interstitials/ssl",
    "decentr://invalidations",
    "decentr://local-state",
    "decentr://management",
    "decentr://media-engagement",
    "decentr://media-history",
    "decentr://media-internals",
    "decentr://media-router-internals",
    // TODO(crbug.com/1217395): DCHECK failure
    // "decentr://memory-internals",
    "decentr://net-export",
    "decentr://net-internals",
    "decentr://network-error",
    "decentr://network-errors",
    "decentr://new-tab-page",
    "decentr://newtab",
    "decentr://ntp-tiles-internals",
    "decentr://omnibox",
    "decentr://password-manager-internals",
    "decentr://policy",
    "decentr://predictors",
    "decentr://prefs-internals",
    "decentr://print",
    "decentr://process-internals",
    "decentr://quota-internals",
    "decentr://reset-password",
    "decentr://safe-browsing",
    "decentr://serviceworker-internals",
    "decentr://settings",
    // TODO(crbug.com/1115600): DCHECK failure when opening
    // decentr://signin-dice-web-intercept.
    // "decentr://signin-dice-web-intercept",
    "decentr://signin-internals",
    "decentr://site-engagement",
    // TODO(crbug.com/1099564): Navigating to decentr://sync-confirmation and
    // quickly navigating away cause DCHECK failure.
    // "decentr://sync-confirmation",
    "decentr://sync-internals",
    "decentr://syncfs-internals",
    "decentr://system",
    // TODO(crbug.com/1099565): Navigating to decentr://tab-strip and quickly
    // navigating away cause DCHECK failure.
    // "decentr://tab-strip",
    "decentr://terms",
    "decentr://tracing",
    "decentr://translate-internals",
    "decentr://ukm",
    "decentr://usb-internals",
    "decentr://user-actions",
    "decentr://version",
    "decentr://web-app-internals",
    "decentr://webrtc-internals",
    "decentr://webrtc-logs",
#if defined(OS_ANDROID)
    "decentr://explore-sites-internals",
    "decentr://internals/notifications",
    "decentr://internals/query-tiles",
    "decentr://offline-internals",
    "decentr://snippets-internals",
    "decentr://webapks",
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    "decentr://account-manager-error",
    "decentr://account-manager-welcome",
    "decentr://account-migration-welcome",
    "decentr://add-supervision",
    // TODO(crbug.com/1102129): DCHECK failure in
    // ArcGraphicsTracingHandler::ArcGraphicsTracingHandler.
    // "decentr://arc-graphics-tracing",
    // "decentr://arc-overview-tracing",
    "decentr://assistant-optin",
    "decentr://bluetooth-pairing",
    "decentr://certificate-manager",
    "decentr://crostini-credits",
    "decentr://crostini-installer",
    "decentr://cryptohome",
    "decentr://drive-internals",
    "decentr://family-link-user-internals",
    "decentr://help-app",
    "decentr://internet-config-dialog",
    "decentr://internet-detail-dialog",
    "decentr://linux-proxy-config",
    "decentr://multidevice-setup",
    "decentr://network",
    "decentr://oobe",
    "decentr://os-credits",
    "decentr://os-settings",
    "decentr://power",
    "decentr://proximity-auth/proximity_auth.html",
    "decentr://set-time",
    "decentr://slow",
    "decentr://smb-credentials-dialog",
    "decentr://smb-share-dialog",
    "decentr://sys-internals",
    "decentr-untrusted://terminal",
#endif
#if !defined(OS_CHROMEOS)
    "decentr://apps",
    "decentr://browser-switch",
#endif
#if !BUILDFLAG(IS_CHROMEOS_ASH)
    "decentr://signin-email-confirmation",
    "decentr://welcome",
#endif
#if !defined(OS_MAC)
    "decentr://sandbox",
    "decentr://nacl",
    // TODO(https://crbug.com/1219651): this test is flaky on mac.
    "decentr://bluetooth-internals",
#endif
#if defined(OS_WIN)
    "decentr://conflicts",
#endif
};

INSTANTIATE_TEST_SUITE_P(
    ,
    ChromeURLDataManagerWebUITrustedTypesTest,
    ::testing::ValuesIn(kChromeUrls),
    ChromeURLDataManagerWebUITrustedTypesTest::ParamInfoToString);
