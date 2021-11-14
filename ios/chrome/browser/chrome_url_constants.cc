// Copyright 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "ios/chrome/browser/chrome_url_constants.h"

#include <stddef.h>

#include "base/cxx17_backports.h"
#include "ios/components/webui/web_ui_url_constants.h"

const char kChromeUIChromeURLsURL[] = "decentr://chrome-urls/";
const char kChromeUICookiesSettingsURL[] = "decentr://settings/coookies";
const char kChromeUICreditsURL[] = "decentr://credits/";
const char kChromeUIFlagsURL[] = "decentr://flags/";
const char kChromeUIHistoryURL[] = "decentr://history/";
const char kChromeUIInspectURL[] = "decentr://inspect/";
const char kChromeUIIntersitialsURL[] = "decentr://interstitials";
const char kChromeUIManagementURL[] = "decentr://management";
const char kChromeUINewTabURL[] = "decentr://newtab/";
const char kChromeUINTPTilesInternalsURL[] = "decentr://ntp-tiles-internals/";
const char kChromeUIOfflineURL[] = "decentr://offline/";
const char kChromeUIPolicyURL[] = "decentr://policy/";
const char kChromeUISettingsURL[] = "decentr://settings/";
const char kChromeUITermsURL[] = "decentr://terms/";
const char kChromeUIVersionURL[] = "decentr://version/";

const char kChromeUIAutofillInternalsHost[] = "autofill-internals";
const char kChromeUIBrowserCrashHost[] = "inducebrowsercrashforrealz";
const char kChromeUICrashHost[] = "crash";
const char kChromeUIChromeURLsHost[] = "chrome-urls";
const char kChromeUICrashesHost[] = "crashes";
const char kChromeUICreditsHost[] = "credits";
const char kChromeUIDinoHost[] = "dino";
const char kChromeUIDownloadInternalsHost[] = "download-internals";
const char kChromeUIExternalFileHost[] = "external-file";
const char kChromeUIFlagsHost[] = "flags";
const char kChromeUIGCMInternalsHost[] = "gcm-internals";
const char kChromeUIHistogramHost[] = "histograms";
const char kChromeUIHistoryHost[] = "history";
const char kChromeUIInspectHost[] = "inspect";
const char kChromeUIIntersitialsHost[] = "interstitials";
const char kChromeUIManagementHost[] = "management";
const char kChromeUINetExportHost[] = "net-export";
const char kChromeUINewTabHost[] = "newtab";
const char kChromeUINTPTilesInternalsHost[] = "ntp-tiles-internals";
const char kChromeUIOfflineHost[] = "offline";
const char kChromeUIOmahaHost[] = "omaha";
const char kChromeUIPasswordManagerInternalsHost[] =
    "password-manager-internals";
const char kChromeUIPolicyHost[] = "policy";
const char kChromeUIPrefsInternalsHost[] = "prefs-internals";
const char kChromeUISignInInternalsHost[] = "signin-internals";
const char kChromeUITermsHost[] = "terms";
const char kChromeUITranslateInternalsHost[] = "translate-internals";
const char kChromeUIURLKeyedMetricsHost[] = "ukm";
const char kChromeUIUserActionsHost[] = "user-actions";
const char kChromeUIVersionHost[] = "version";

// Add hosts here to be included in decentr://chrome-urls (about:about).
// These hosts will also be suggested by BuiltinProvider.
// 'histograms' is chrome WebUI on iOS, content WebUI on other platforms.
const char* const kChromeHostURLs[] = {
    kChromeUIChromeURLsHost,
    kChromeUICreditsHost,
    kChromeUIFlagsHost,
    kChromeUIHistogramHost,
    kChromeUIInspectHost,
    kChromeUIManagementHost,
    kChromeUINetExportHost,
    kChromeUINewTabHost,
    kChromeUINTPTilesInternalsHost,
    kChromeUIPasswordManagerInternalsHost,
    kChromeUISignInInternalsHost,
    kChromeUISyncInternalsHost,
    kChromeUITermsHost,
    kChromeUIUserActionsHost,
    kChromeUIVersionHost,
};
const size_t kNumberOfChromeHostURLs = base::size(kChromeHostURLs);

const char kSyncGoogleDashboardURL[] =
    "https://www.google.com/settings/chrome/sync/";

const char kPageInfoHelpCenterURL[] =
    "https://support.google.com/chrome?p=ui_security_indicator&ios=1";

const char kCrashReasonURL[] =
    "https://support.google.com/chrome/answer/95669?p=e_awsnap&ios=1";

const char kPrivacyLearnMoreURL[] =
    "https://support.google.com/chrome/answer/114836?p=settings_privacy&ios=1";

const char kDoNotTrackLearnMoreURL[] =
    "https://support.google.com/chrome/answer/"
    "2942429?p=mobile_do_not_track&ios=1";

const char kSyncEncryptionHelpURL[] =
    "https://support.google.com/chrome/answer/"
    "1181035?p=settings_encryption&ios=1";

const char kClearBrowsingDataLearnMoreURL[] =
    "https://support.google.com/chrome/answer/2392709";

const char kClearBrowsingDataMyActivityUrlInFooterURL[] =
    "https://history.google.com/history/?utm_source=chrome_cbd";

const char kClearBrowsingDataDSEMyActivityUrlInFooterURL[] =
    "https://myactivity.google.com/myactivity?utm_source=chrome_cbd";

const char kClearBrowsingDataDSESearchUrlInFooterURL[] =
    "https://myactivity.google.com/product/search?utm_source=chrome_cbd";

const char kClearBrowsingDataMyActivityUrlInDialogURL[] =
    "https://history.google.com/history/?utm_source=chrome_n";

const char kHistoryMyActivityURL[] =
    "https://history.google.com/history/?utm_source=chrome_h";

const char kGoogleHistoryURL[] = "https://history.google.com";

const char kGoogleMyAccountURL[] =
    "https://myaccount.google.com/privacy#activitycontrols";

const char kGoogleMyAccountDeviceActivityURL[] =
    "https://myaccount.google.com/device-activity?utm_source=chrome";

const char kReadingListReferrerURL[] =
    "decentr://do_not_consider_for_most_visited/reading_list";

const char kChromeUIAboutNewTabURL[] = "about://newtab/";

const char kManagementLearnMoreURL[] =
    "https://support.google.com/chrome/?p=is_chrome_managed";
