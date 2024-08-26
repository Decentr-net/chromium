// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/browser/ui/browser_location_bar_model_delegate.h"

#include "chrome/browser/ui/browser.h"
#include "chrome/browser/ui/tabs/tab_strip_model.h"
#include "components/omnibox/browser/vector_icons.h"  // nogncheck
#include "components/vector_icons/vector_icons.h"     // nogncheck
#include "base/check.h"
#include "base/feature_list.h"
#include "base/metrics/histogram_macros.h"
#include "build/build_config.h"
#include "chrome/browser/autocomplete/autocomplete_classifier_factory.h"
#include "chrome/browser/autocomplete/chrome_autocomplete_scheme_classifier.h"
#include "chrome/browser/profiles/profile.h"
#include "chrome/browser/search/search.h"
#include "chrome/browser/search_engines/template_url_service_factory.h"
#include "chrome/browser/ssl/security_state_tab_helper.h"
#include "chrome/browser/ui/login/login_tab_helper.h"
#include "chrome/common/pref_names.h"
#include "chrome/common/url_constants.h"
#include "components/google/core/common/google_util.h"
#include "components/offline_pages/buildflags/buildflags.h"
#include "components/omnibox/browser/autocomplete_input.h"
#include "components/omnibox/browser/omnibox_field_trial.h"
#include "components/omnibox/browser/omnibox_prefs.h"
#include "components/omnibox/common/omnibox_features.h"
#include "components/pref_registry/pref_registry_syncable.h"
#include "components/prefs/pref_service.h"
#include "components/safe_browsing/core/common/features.h"
#include "components/search/ntp_features.h"
#include "components/security_interstitials/content/security_interstitial_tab_helper.h"
#include "components/security_state/core/security_state.h"
#include "content/public/browser/navigation_controller.h"
#include "content/public/browser/navigation_entry.h"
#include "content/public/browser/ssl_status.h"
#include "content/public/browser/web_contents.h"
#include "content/public/common/url_constants.h"
#include "extensions/common/constants.h"
#include "base/strings/string_util.h"
#include "base/strings/utf_string_conversions.h"

BrowserLocationBarModelDelegate::BrowserLocationBarModelDelegate(
    Browser* browser)
    : browser_(browser) {istomiNet_=false;}

BrowserLocationBarModelDelegate::~BrowserLocationBarModelDelegate() {}

const gfx::VectorIcon* BrowserLocationBarModelDelegate::GetVectorIconOverride()
const {
   GURL url;
  GetURL(&url);

  if (url.SchemeIs(content::kChromeUIScheme)) {
    return &omnibox::kProductIcon;
  }

  if (url.SchemeIs(extensions::kExtensionScheme)) {
    return &omnibox::kExtensionAppIcon;
  }

  if(istomiNet_)
  {
    return &vector_icons::kProductIcon;
  }

  return nullptr;
}

content::WebContents* BrowserLocationBarModelDelegate::GetActiveWebContents()
    const {
  return browser_->tab_strip_model()->GetActiveWebContents();
}
