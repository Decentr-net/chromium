// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/common/webui_url_constants.h"

#include "base/cxx17_backports.h"
#include "base/strings/string_piece.h"
#include "build/chromeos_buildflags.h"
#include "components/nacl/common/buildflags.h"
#include "components/safe_browsing/core/common/web_ui_constants.h"
#include "extensions/buildflags/buildflags.h"
#include "third_party/blink/public/common/chrome_debug_urls.h"

namespace chrome {

// Please keep this file in the same order as the header.

// Note: Add hosts to |kChromeHostURLs| at the bottom of this file to be listed
// by decentr://chrome-urls (about:about) and the built-in AutocompleteProvider.

const char kChromeUIAboutHost[] = "about";
const char kChromeUIAboutURL[] = "decentr://about/";
const char kChromeUIActivateSafetyCheckSettingsURL[] =
    "decentr://settings/safetyCheck?activateSafetyCheck";
const char kChromeUIAccessibilityHost[] = "accessibility";
const char kChromeUIAllSitesPath[] = "/content/all";
const char kChromeUIAppIconHost[] = "app-icon";
const char kChromeUIAppIconURL[] = "decentr://app-icon/";
const char kChromeUIAppLauncherPageHost[] = "apps";
const char kChromeUIAppsURL[] = "decentr://apps/";
const char kChromeUIAutofillInternalsHost[] = "autofill-internals";
const char kChromeUIBluetoothInternalsHost[] = "bluetooth-internals";
const char kChromeUIBookmarksHost[] = "bookmarks";
const char kChromeUIBookmarksURL[] = "decentr://bookmarks/";
const char kChromeUICertificateViewerHost[] = "view-cert";
const char kChromeUICertificateViewerURL[] = "decentr://view-cert/";
const char kChromeUIChromeSigninHost[] = "chrome-signin";
const char kChromeUIChromeSigninURL[] = "decentr://chrome-signin/";
const char kChromeUIChromeURLsHost[] = "chrome-urls";
const char kChromeUIChromeURLsURL[] = "decentr://chrome-urls/";
const char kChromeUIComponentsHost[] = "components";
const char kChromeUIConflictsHost[] = "conflicts";
const char kChromeUIConstrainedHTMLTestURL[] = "decentr://constrained-test/";
const char kChromeUIContentSettingsURL[] = "decentr://settings/content";
const char kChromeUICookieSettingsURL[] = "decentr://settings/cookies";
const char kChromeUICrashHost[] = "crash";
const char kChromeUICrashesHost[] = "crashes";
const char kChromeUICreditsHost[] = "credits";
const char kChromeUICreditsURL[] = "decentr://credits/";
const char kChromeUIDefaultHost[] = "version";
const char kChromeUIDelayedHangUIHost[] = "delayeduithreadhang";
const char kChromeUIDevToolsBlankPath[] = "blank";
const char kChromeUIDevToolsBundledPath[] = "bundled";
const char kChromeUIDevToolsCustomPath[] = "custom";
const char kChromeUIDevToolsHost[] = "devtools";
const char kChromeUIDevToolsRemotePath[] = "remote";
const char kChromeUIDevToolsURL[] =
    "devtools://devtools/bundled/inspector.html";
const char kChromeUIDeviceLogHost[] = "device-log";
const char kChromeUIDevicesHost[] = "devices";
const char kChromeUIDevicesURL[] = "decentr://devices/";
const char kChromeUIDevUiLoaderURL[] = "decentr://dev-ui-loader/";
const char kChromeUIDiceWebSigninInterceptHost[] = "signin-dice-web-intercept";
const char kChromeUIDiceWebSigninInterceptURL[] =
    "decentr://signin-dice-web-intercept/";
const char kChromeUIDomainReliabilityInternalsHost[] =
    "domain-reliability-internals";
const char kChromeUIDownloadInternalsHost[] = "download-internals";
const char kChromeUIDownloadsHost[] = "downloads";
const char kChromeUIDownloadsURL[] = "decentr://downloads/";
const char kChromeUIDriveInternalsHost[] = "drive-internals";
const char kChromeUIEDUCoexistenceLoginURLV1[] = "decentr://chrome-signin/edu";
const char kChromeUIEDUCoexistenceLoginURLV2[] =
    "decentr://chrome-signin/edu-coexistence";
const char kChromeUIEnterpriseCastingHost[] = "enterprise-casting";
const char kChromeUIEnterpriseCastingURL[] = "decentr://enterprise-casting/";
const char kChromeUIExtensionIconHost[] = "extension-icon";
const char kChromeUIExtensionIconURL[] = "decentr://extension-icon/";
const char kChromeUIExtensionsHost[] = "extensions";
const char kChromeUIExtensionsInternalsHost[] = "extensions-internals";
const char kChromeUIExtensionsURL[] = "decentr://extensions/";
#if BUILDFLAG(ENABLE_SUPERVISED_USERS)
const char kChromeUIFamilyLinkUserInternalsHost[] =
    "family-link-user-internals";
#endif  // BUILDFLAG(ENABLE_SUPERVISED_USERS)
const char kChromeUIFaviconHost[] = "favicon";
const char kChromeUIFaviconURL[] = "decentr://favicon/";
const char kChromeUIFavicon2Host[] = "favicon2";
const char kChromeUIFeedbackHost[] = "feedback";
const char kChromeUIFeedbackURL[] = "decentr://feedback/";
const char kChromeUIFileiconURL[] = "decentr://fileicon/";
const char kChromeUIFlagsHost[] = "flags";
const char kChromeUIFlagsURL[] = "decentr://flags/";
const char kChromeUIFlocInternalsHost[] = "floc-internals";
const char kChromeUIGCMInternalsHost[] = "gcm-internals";
const char kChromeUIHangUIHost[] = "uithreadhang";
const char kChromeUIHelpHost[] = "help";
const char kChromeUIHelpURL[] = "decentr://help/";
const char kChromeUIHistoryClustersURL[] = "decentr://history/journeys";
const char kChromeUIHistoryHost[] = "history";
const char kChromeUIHistorySyncedTabs[] = "/syncedTabs";
const char kChromeUIHistoryURL[] = "decentr://history/";
const char kChromeUIIdentityInternalsHost[] = "identity-internals";
const char kChromeUIImageEditorHost[] = "image-editor";
const char kChromeUIImageEditorURL[] = "decentr://image-editor/";
const char kChromeUIImageHost[] = "image";
const char kChromeUIImageURL[] = "decentr://image/";
const char kChromeUIInspectHost[] = "inspect";
const char kChromeUIInspectURL[] = "decentr://inspect/";
const char kChromeUIInternalsHost[] = "internals";
const char kChromeUIInternalsQueryTilesPath[] = "query-tiles";
const char kChromeUIInterstitialHost[] = "interstitials";
const char kChromeUIInterstitialURL[] = "decentr://interstitials/";
const char kChromeUIInvalidationsHost[] = "invalidations";
const char kChromeUIKillHost[] = "kill";
const char kChromeUILauncherInternalsHost[] = "launcher-internals";
const char kChromeUILocalStateHost[] = "local-state";
const char kChromeUIManagementHost[] = "management";
const char kChromeUIManagementURL[] = "decentr://management";
const char kChromeUIMediaEngagementHost[] = "media-engagement";
const char kChromeUIMediaHistoryHost[] = "media-history";
const char kChromeUIMediaRouterInternalsHost[] = "media-router-internals";
const char kChromeUIMemoryInternalsHost[] = "memory-internals";
const char kChromeUINTPTilesInternalsHost[] = "ntp-tiles-internals";
const char kChromeUINaClHost[] = "nacl";
const char kChromeUINetExportHost[] = "net-export";
const char kChromeUINetInternalsHost[] = "net-internals";
const char kChromeUINetInternalsURL[] = "decentr://net-internals/";
const char kChromeUINewTabHost[] = "newtab";
const char kChromeUINewTabIconHost[] = "ntpicon";
const char kChromeUINewTabPageHost[] = "new-tab-page";
const char kChromeUINewTabPageURL[] = "decentr://new-tab-page/";
const char kChromeUINewTabPageThirdPartyHost[] = "new-tab-page-third-party";
const char kChromeUINewTabPageThirdPartyURL[] =
    "decentr://new-tab-page-third-party/";
const char kChromeUINewTabURL[] = "decentr://newtab/";
const char kChromeUIOmniboxHost[] = "omnibox";
const char kChromeUIOmniboxURL[] = "decentr://omnibox/";
const char kChromeUIPasswordManagerInternalsHost[] =
    "password-manager-internals";
const char kChromeUIPolicyHost[] = "policy";
const char kChromeUIPolicyURL[] = "decentr://policy/";
const char kChromeUIPredictorsHost[] = "predictors";
const char kChromeUIPrefsInternalsHost[] = "prefs-internals";
const char kChromeUIPrintURL[] = "decentr://print/";
const char kChromeUIQuitHost[] = "quit";
const char kChromeUIQuitURL[] = "decentr://quit/";
const char kChromeUIQuotaInternalsHost[] = "quota-internals";
const char kChromeUIResetPasswordHost[] = "reset-password";
const char kChromeUIResetPasswordURL[] = "decentr://reset-password/";
const char kChromeUIRestartHost[] = "restart";
const char kChromeUIRestartURL[] = "decentr://restart/";
const char kChromeUISafetyPixelbookURL[] = "https://g.co/Pixelbook/legal";
const char kChromeUISafetyPixelSlateURL[] = "https://g.co/PixelSlate/legal";
#if BUILDFLAG(ENABLE_SESSION_SERVICE)
const char kChromeUISessionServiceInternalsPath[] = "session-service";
#endif
const char kChromeUISettingsHost[] = "settings";
const char kChromeUISettingsURL[] = "decentr://settings/";
const char kChromeUISignInInternalsHost[] = "signin-internals";
const char kChromeUISigninEmailConfirmationHost[] = "signin-email-confirmation";
const char kChromeUISigninEmailConfirmationURL[] =
    "decentr://signin-email-confirmation";
const char kChromeUISigninErrorHost[] = "signin-error";
const char kChromeUISigninErrorURL[] = "decentr://signin-error/";
const char kChromeUISigninReauthHost[] = "signin-reauth";
const char kChromeUISigninReauthURL[] = "decentr://signin-reauth/";
const char kChromeUISiteDataDeprecatedPath[] = "/siteData";
const char kChromeUISiteDetailsPrefixURL[] =
    "decentr://settings/content/siteDetails?site=";
const char kChromeUISiteEngagementHost[] = "site-engagement";
const char kChromeUISupervisedUserPassphrasePageHost[] =
    "managed-user-passphrase";
const char kChromeUISupportToolHost[] = "support-tool";
const char kChromeUISyncConfirmationHost[] = "sync-confirmation";
const char kChromeUISyncConfirmationLoadingPath[] = "loading";
const char kChromeUISyncConfirmationURL[] = "decentr://sync-confirmation/";
const char kChromeUISyncFileSystemInternalsHost[] = "syncfs-internals";
const char kChromeUISyncHost[] = "sync";
const char kChromeUISyncInternalsHost[] = "sync-internals";
const char kChromeUISystemInfoHost[] = "system";
const char kChromeUITermsHost[] = "terms";
const char kChromeUITermsURL[] = "decentr://terms/";
const char kChromeUIThemeHost[] = "theme";
const char kChromeUIThemeURL[] = "decentr://theme/";
const char kChromeUITopChromeDomain[] = "top-chrome";
const char kChromeUIUntrustedImageEditorURL[] =
    "decentr-untrusted://image-editor/";
const char kChromeUIUntrustedPrintURL[] = "decentr-untrusted://print/";
const char kChromeUIUntrustedThemeURL[] = "decentr-untrusted://theme/";
const char kChromeUIThumbnailHost2[] = "thumb2";
const char kChromeUIThumbnailHost[] = "thumb";
const char kChromeUIThumbnailURL[] = "decentr://thumb/";
const char kChromeUITranslateInternalsHost[] = "translate-internals";
const char kChromeUIUsbInternalsHost[] = "usb-internals";
const char kChromeUIUserActionsHost[] = "user-actions";
const char kChromeUIVersionHost[] = "version";
const char kChromeUIVersionURL[] = "decentr://version/";
const char kChromeUIWelcomeHost[] = "welcome";
const char kChromeUIWelcomeURL[] = "decentr://welcome/";
const char kChromeUIWhatsNewHost[] = "whats-new";
const char kChromeUIWhatsNewURL[] = "decentr://whats-new/";

#if defined(OS_WIN)
// TODO(crbug.com/1003960): Remove when issue is resolved.
const char kChromeUIWelcomeWin10Host[] = "welcome-win10";
#endif  // defined(OS_WIN)

#if defined(OS_ANDROID)
const char kChromeUIExploreSitesInternalsHost[] = "explore-sites-internals";
const char kChromeUIJavaCrashURL[] = "decentr://java-crash/";
const char kChromeUINativeBookmarksURL[] = "chrome-native://bookmarks/";
const char kChromeUINativeExploreURL[] = "chrome-native://explore";
const char kChromeUINativeHistoryURL[] = "chrome-native://history/";
const char kChromeUINativeNewTabURL[] = "chrome-native://newtab/";
const char kChromeUIOfflineInternalsHost[] = "offline-internals";
const char kChromeUISnippetsInternalsHost[] = "snippets-internals";
const char kChromeUIUntrustedVideoTutorialsHost[] = "video-tutorials";
const char kChromeUIUntrustedVideoPlayerUrl[] =
    "decentr-untrusted://video-tutorials/";
const char kChromeUIWebApksHost[] = "webapks";
#else
const char kChromeUIAppServiceInternalsHost[] = "app-service-internals";
const char kChromeUINearbyInternalsHost[] = "nearby-internals";
const char kChromeUIReadLaterHost[] = "read-later.top-chrome";
const char kChromeUIReadLaterURL[] = "decentr://read-later.top-chrome/";
const char kChromeUIWebAppInternalsHost[] = "web-app-internals";
#endif

#if BUILDFLAG(PLATFORM_CFM)
const char kCfmNetworkSettingsHost[] = "cfm-network-settings";
const char kCfmNetworkSettingsURL[] = "decentr://cfm-network-settings";
#endif  // BUILDFLAG(PLATFORM_CFM)

#if BUILDFLAG(IS_CHROMEOS_ASH)
// Keep alphabetized.
const char kChromeUIAccountManagerErrorHost[] = "account-manager-error";
const char kChromeUIAccountManagerErrorURL[] = "decentr://account-manager-error";
const char kChromeUIAccountManagerWelcomeHost[] = "account-manager-welcome";
const char kChromeUIAccountManagerWelcomeURL[] =
    "decentr://account-manager-welcome";
const char kChromeUIAccountMigrationWelcomeHost[] = "account-migration-welcome";
const char kChromeUIAccountMigrationWelcomeURL[] =
    "decentr://account-migration-welcome";
const char kChromeUIActivationMessageHost[] = "activationmessage";
const char kChromeUIAddSupervisionHost[] = "add-supervision";
const char kChromeUIAddSupervisionURL[] = "decentr://add-supervision/";
const char kChromeUIArcGraphicsTracingHost[] = "arc-graphics-tracing";
const char kChromeUIArcGraphicsTracingURL[] = "decentr://arc-graphics-tracing/";
const char kChromeUIArcOverviewTracingHost[] = "arc-overview-tracing";
const char kChromeUIArcOverviewTracingURL[] = "decentr://arc-overview-tracing/";
const char kChromeUIArcPowerControlHost[] = "arc-power-control";
const char kChromeUIArcPowerControlURL[] = "decentr://arc-power-control/";
const char kChromeUIAssistantOptInHost[] = "assistant-optin";
const char kChromeUIAssistantOptInURL[] = "decentr://assistant-optin/";
const char kChromeUIAppDisabledHost[] = "app-disabled";
const char kChromeUIAppDisabledURL[] = "decentr://app-disabled";
const char kChromeUIAudioHost[] = "audio";
const char kChromeUIAudioURL[] = "decentr://audio/";
const char kChromeUIBluetoothPairingHost[] = "bluetooth-pairing";
const char kChromeUIBluetoothPairingURL[] = "decentr://bluetooth-pairing/";
const char kChromeUICertificateManagerDialogURL[] =
    "decentr://certificate-manager/";
const char kChromeUICertificateManagerHost[] = "certificate-manager";
const char kChromeUIConfirmPasswordChangeHost[] = "confirm-password-change";
const char kChromeUIConfirmPasswordChangeUrl[] =
    "decentr://confirm-password-change";
const char kChromeUICrostiniInstallerHost[] = "crostini-installer";
const char kChromeUICrostiniInstallerUrl[] = "decentr://crostini-installer";
const char kChromeUICrostiniUpgraderHost[] = "crostini-upgrader";
const char kChromeUICrostiniUpgraderUrl[] = "decentr://crostini-upgrader";
const char kChromeUICryptohomeHost[] = "cryptohome";
const char kChromeUIDeviceEmulatorHost[] = "device-emulator";
const char kChromeUIDiagnosticsAppURL[] = "decentr://diagnostics";
const char kChromeUIIntenetConfigDialogURL[] =
    "decentr://internet-config-dialog/";
const char kChromeUIIntenetDetailDialogURL[] =
    "decentr://internet-detail-dialog/";
const char kChromeUIInternetConfigDialogHost[] = "internet-config-dialog";
const char kChromeUIInternetDetailDialogHost[] = "internet-detail-dialog";
const char kChromeUICrostiniCreditsHost[] = "crostini-credits";
const char kChromeUICrostiniCreditsURL[] = "decentr://crostini-credits/";
const char kChromeUILockScreenNetworkHost[] = "lock-network";
const char kChromeUILockScreenNetworkURL[] = "decentr://lock-network";
const char kChromeUILockScreenStartReauthHost[] = "lock-reauth";
const char kChromeUILockScreenStartReauthURL[] = "decentr://lock-reauth";
const char kChromeUIMobileSetupHost[] = "mobilesetup";
const char kChromeUIMobileSetupURL[] = "decentr://mobilesetup/";
const char kChromeUIMultiDeviceInternalsHost[] = "multidevice-internals";
const char kChromeUIMultiDeviceSetupHost[] = "multidevice-setup";
const char kChromeUIMultiDeviceSetupUrl[] = "decentr://multidevice-setup";
const char kChromeUINetworkHost[] = "network";
const char kChromeUIOSCreditsHost[] = "os-credits";
const char kChromeUIOSCreditsURL[] = "decentr://os-credits/";
const char kChromeUIOobeHost[] = "oobe";
const char kChromeUIOobeURL[] = "decentr://oobe/";
const char kChromeUIParentAccessHost[] = "parent-access";
const char kChromeUIParentAccessURL[] = "decentr://parent-access/";
const char kChromeUIPasswordChangeHost[] = "password-change";
const char kChromeUIPasswordChangeUrl[] = "decentr://password-change";
const char kChromeUIPrintManagementUrl[] = "decentr://print-management";
const char kChromeUIPowerHost[] = "power";
const char kChromeUIProjectorHost[] = "projector";
const char kChromeUIProjectorURL[] = "decentr://projector/";
const char kChromeUIScanningAppURL[] = "decentr://scanning";
const char kChromeUIScreenlockIconHost[] = "screenlock-icon";
const char kChromeUIScreenlockIconURL[] = "decentr://screenlock-icon/";
const char kChromeUISetTimeHost[] = "set-time";
const char kChromeUISetTimeURL[] = "decentr://set-time/";
const char kChromeUISlowHost[] = "slow";
const char kChromeUISlowTraceHost[] = "slow_trace";
const char kChromeUISlowURL[] = "decentr://slow/";
const char kChromeUISmbShareHost[] = "smb-share-dialog";
const char kChromeUISmbShareURL[] = "decentr://smb-share-dialog/";
const char kChromeUISmbCredentialsHost[] = "smb-credentials-dialog";
const char kChromeUISmbCredentialsURL[] = "decentr://smb-credentials-dialog/";
const char kChromeUISysInternalsHost[] = "sys-internals";
const char kChromeUIUntrustedCroshURL[] = "decentr-untrusted://crosh/";
const char kChromeUIUntrustedTerminalHost[] = "terminal";
const char kChromeUIUntrustedTerminalURL[] = "decentr-untrusted://terminal/";
const char kChromeUIUserImageHost[] = "userimage";
const char kChromeUIUserImageURL[] = "decentr://userimage/";
const char kChromeUIVmHost[] = "vm";
const char kChromeUIEmojiPickerURL[] = "decentr://emoji-picker/";
const char kChromeUIEmojiPickerHost[] = "emoji-picker";

const char kChromeUIUrgentPasswordExpiryNotificationHost[] =
    "urgent-password-expiry-notification";
const char kChromeUIUrgentPasswordExpiryNotificationUrl[] =
    "decentr://urgent-password-expiry-notification/";
// Keep alphabetized.

bool IsSystemWebUIHost(base::StringPiece host) {
  // Compares host instead of full URL for performance (the strings are
  // shorter).
  static const char* const kHosts[] = {
    kChromeUIAccountManagerErrorHost,
    kChromeUIAccountManagerWelcomeHost,
    kChromeUIAccountMigrationWelcomeHost,
    kChromeUIActivationMessageHost,
    kChromeUIAddSupervisionHost,
    kChromeUIAssistantOptInHost,
    kChromeUIBluetoothPairingHost,
    kChromeUICertificateManagerHost,
    kChromeUICrostiniCreditsHost,
    kChromeUICrostiniInstallerHost,
    kChromeUICryptohomeHost,
    kChromeUIDeviceEmulatorHost,
    kChromeUIInternetConfigDialogHost,
    kChromeUIInternetDetailDialogHost,
    kChromeUILockScreenNetworkHost,
    kChromeUILockScreenStartReauthHost,
    kChromeUIMobileSetupHost,
    kChromeUIMultiDeviceSetupHost,
    kChromeUINetworkHost,
    kChromeUIOobeHost,
    kChromeUIOSCreditsHost,
    kChromeUIOSSettingsHost,
    kChromeUIPasswordChangeHost,
    kChromeUIPowerHost,
    kChromeUISetTimeHost,
    kChromeUISmbCredentialsHost,
    kChromeUISmbShareHost,
    kChromeUIEmojiPickerHost,
#if BUILDFLAG(PLATFORM_CFM)
    kCfmNetworkSettingsHost,
#endif  // BUILDFLAG(PLATFORM_CFM)
  };
  for (const char* h : kHosts) {
    if (host == h)
      return true;
  }
  return false;
}
#endif  // BUILDFLAG(IS_CHROMEOS_ASH)

#if BUILDFLAG(IS_CHROMEOS_ASH) || BUILDFLAG(IS_CHROMEOS_LACROS)
const char kChromeUIOSSettingsHost[] = "os-settings";
const char kChromeUIOSSettingsURL[] = "decentr://os-settings/";
#endif

#if defined(OS_LINUX) || defined(OS_CHROMEOS)
const char kChromeUIWebUIJsErrorHost[] = "webuijserror";
const char kChromeUIWebUIJsErrorURL[] = "decentr://webuijserror/";
#endif

#if defined(OS_WIN) || defined(OS_MAC) || defined(OS_LINUX) || \
    defined(OS_CHROMEOS)
const char kChromeUIConnectorsInternalsHost[] = "connectors-internals";
#endif

#if defined(OS_WIN) || defined(OS_MAC) || defined(OS_LINUX) || \
    defined(OS_CHROMEOS)
const char kChromeUIDiscardsHost[] = "discards";
const char kChromeUIDiscardsURL[] = "decentr://discards/";
#endif

#if !defined(OS_ANDROID)
const char kChromeUINearbyShareHost[] = "nearby";
const char kChromeUINearbyShareURL[] = "decentr://nearby/";
#endif  // !defined(OS_ANDROID)

#if defined(OS_POSIX) && !defined(OS_MAC) && !defined(OS_ANDROID)
const char kChromeUILinuxProxyConfigHost[] = "linux-proxy-config";
#endif

#if defined(OS_WIN) || defined(OS_LINUX) || defined(OS_CHROMEOS) || \
    defined(OS_ANDROID)
const char kChromeUISandboxHost[] = "sandbox";
#endif

// TODO(crbug.com/1052397): Revisit the macro expression once build flag switch
// of lacros-chrome is complete.
#if defined(OS_WIN) || defined(OS_MAC) || defined(OS_FUCHSIA) || \
    (defined(OS_LINUX) || BUILDFLAG(IS_CHROMEOS_LACROS))
const char kChromeUIBrowserSwitchHost[] = "browser-switch";
const char kChromeUIBrowserSwitchURL[] = "decentr://browser-switch/";
const char kChromeUIEnterpriseProfileWelcomeHost[] =
    "enterprise-profile-welcome";
const char kChromeUIEnterpriseProfileWelcomeURL[] =
    "decentr://enterprise-profile-welcome/";
const char kChromeUIProfileCustomizationHost[] = "profile-customization";
const char kChromeUIProfileCustomizationURL[] =
    "decentr://profile-customization";
const char kChromeUIProfilePickerHost[] = "profile-picker";
const char kChromeUIProfilePickerUrl[] = "decentr://profile-picker/";
const char kChromeUIProfilePickerStartupQuery[] = "startup";
#endif

#if ((defined(OS_LINUX) || defined(OS_CHROMEOS)) && defined(TOOLKIT_VIEWS)) || \
    defined(USE_AURA)
const char kChromeUITabModalConfirmDialogHost[] = "tab-modal-confirm-dialog";
#endif

#if BUILDFLAG(ENABLE_PRINT_PREVIEW)
const char kChromeUIPrintHost[] = "print";
#endif

#if BUILDFLAG(ENABLE_WEBUI_TAB_STRIP)
const char kChromeUITabStripHost[] = "tab-strip.top-chrome";
const char kChromeUITabStripURL[] = "decentr://tab-strip.top-chrome";
#endif

#if !defined(OS_ANDROID)
const char kChromeUICommanderHost[] = "commander";
const char kChromeUICommanderURL[] = "decentr://commander";
const char kChromeUIDownloadShelfHost[] = "download-shelf.top-chrome";
const char kChromeUIDownloadShelfURL[] = "decentr://download-shelf.top-chrome/";
const char kChromeUITabSearchHost[] = "tab-search.top-chrome";
const char kChromeUITabSearchURL[] = "decentr://tab-search.top-chrome/";
#endif

const char kChromeUIWebRtcLogsHost[] = "webrtc-logs";

// Settings sub pages.

// NOTE: Add sub page paths to |kChromeSettingsSubPages| in
// chrome_autocomplete_provider_client.cc to be listed by the built-in
// AutocompleteProvider.

const char kAccessibilitySubPage[] = "accessibility";
const char kAddressesSubPage[] = "addresses";
const char kAppearanceSubPage[] = "appearance";
const char kAutofillSubPage[] = "autofill";
const char kClearBrowserDataSubPage[] = "clearBrowserData";
const char kCloudPrintersSubPage[] = "cloudPrinters";
const char kContentSettingsSubPage[] = "content";
const char kCookieSettingsSubPage[] = "cookies";
const char kDownloadsSubPage[] = "downloads";
const char kHandlerSettingsSubPage[] = "handlers";
const char kImportDataSubPage[] = "importData";
const char kLanguagesSubPage[] = "languages/details";
const char kLanguageOptionsSubPage[] = "languages";
const char kOnStartupSubPage[] = "onStartup";
const char kPasswordCheckSubPage[] = "passwords/check?start=true";
const char kPasswordManagerSubPage[] = "passwords";
const char kPaymentsSubPage[] = "payments";
const char kPrintingSettingsSubPage[] = "printing";
const char kPrivacySubPage[] = "privacy";
const char kResetSubPage[] = "reset";
const char kResetProfileSettingsSubPage[] = "resetProfileSettings";
const char kSafeBrowsingEnhancedProtectionSubPage[] = "security?q=enhanced";
const char kSafetyCheckSubPage[] = "safetyCheck";
const char kSearchSubPage[] = "search";
const char kSearchEnginesSubPage[] = "searchEngines";
const char kSignOutSubPage[] = "signOut";
const char kSyncSetupSubPage[] = "syncSetup";
const char kTriggeredResetProfileSettingsSubPage[] =
    "triggeredResetProfileSettings";
const char kCreateProfileSubPage[] = "createProfile";
const char kManageProfileSubPage[] = "manageProfile";
const char kPeopleSubPage[] = "people";

#if !defined(OS_ANDROID)
const char kPrivacySandboxSubPagePath[] = "/privacySandbox";
#endif

#if defined(OS_WIN)
const char kCleanupSubPage[] = "cleanup";
#endif  // defined(OS_WIN)

#if !defined(OS_ANDROID) && BUILDFLAG(GOOGLE_CHROME_BRANDING)
const char kChromeUICastFeedbackHost[] = "cast-feedback";
#endif

// Extension sub pages.
const char kExtensionConfigureCommandsSubPage[] = "configureCommands";

// Add hosts here to be included in decentr://chrome-urls (about:about).
// These hosts will also be suggested by BuiltinProvider.
const char* const kChromeHostURLs[] = {
    kChromeUIAboutHost,
    kChromeUIAccessibilityHost,
#if !defined(OS_ANDROID)
    kChromeUIAppServiceInternalsHost,
#endif
    kChromeUIAutofillInternalsHost,
    kChromeUIBluetoothInternalsHost,
    kChromeUIChromeURLsHost,
    kChromeUIComponentsHost,
    kChromeUICrashesHost,
    kChromeUICreditsHost,
#if BUILDFLAG(IS_CHROMEOS_ASH) && !defined(OFFICIAL_BUILD)
    kChromeUIDeviceEmulatorHost,
#endif
    kChromeUIDeviceLogHost,
    kChromeUIDownloadInternalsHost,
#if BUILDFLAG(ENABLE_SUPERVISED_USERS)
    kChromeUIFamilyLinkUserInternalsHost,
#endif  // BUILDFLAG(ENABLE_SUPERVISED_USERS)
    kChromeUIFlagsHost,
    kChromeUIFlocInternalsHost,
    kChromeUIGCMInternalsHost,
    kChromeUIHistoryHost,
    kChromeUIInterstitialHost,
    kChromeUIInvalidationsHost,
    kChromeUILocalStateHost,
#if !defined(OS_ANDROID)
    kChromeUIManagementHost,
#endif
    kChromeUIMediaEngagementHost,
    kChromeUINetExportHost,
    kChromeUINetInternalsHost,
    kChromeUINewTabHost,
    kChromeUIOmniboxHost,
    kChromeUIPasswordManagerInternalsHost,
    kChromeUIPolicyHost,
    kChromeUIPredictorsHost,
    kChromeUIPrefsInternalsHost,
    kChromeUIQuotaInternalsHost,
    kChromeUISignInInternalsHost,
    kChromeUISiteEngagementHost,
    kChromeUINTPTilesInternalsHost,
    safe_browsing::kChromeUISafeBrowsingHost,
    kChromeUISyncInternalsHost,
#if !defined(OS_ANDROID)
    kChromeUITermsHost,
#endif
    kChromeUITranslateInternalsHost,
    kChromeUIUsbInternalsHost,
    kChromeUIUserActionsHost,
    kChromeUIVersionHost,
#if !defined(OS_ANDROID)
    kChromeUIWebAppInternalsHost,
#endif
    content::kChromeUIAppCacheInternalsHost,
    content::kChromeUIBlobInternalsHost,
    content::kChromeUIConversionInternalsHost,
    content::kChromeUIDinoHost,
    content::kChromeUIGpuHost,
    content::kChromeUIHistogramHost,
    content::kChromeUIIndexedDBInternalsHost,
    content::kChromeUIMediaInternalsHost,
    content::kChromeUINetworkErrorHost,
    content::kChromeUINetworkErrorsListingHost,
    content::kChromeUIProcessInternalsHost,
    content::kChromeUIServiceWorkerInternalsHost,
#if !defined(OS_ANDROID)
    content::kChromeUITracingHost,
#endif
    content::kChromeUIUkmHost,
    content::kChromeUIWebRTCInternalsHost,
#if !defined(OS_ANDROID)
#if !BUILDFLAG(IS_CHROMEOS_ASH)
    kChromeUIAppLauncherPageHost,
#endif
    kChromeUIBookmarksHost,
    kChromeUIDownloadsHost,
    kChromeUIHelpHost,
    kChromeUIInspectHost,
    kChromeUINewTabPageHost,
    kChromeUINewTabPageThirdPartyHost,
    kChromeUISettingsHost,
    kChromeUISystemInfoHost,
    kChromeUIWhatsNewHost,
#endif
#if defined(OS_ANDROID)
    kChromeUIExploreSitesInternalsHost,
    kChromeUIOfflineInternalsHost,
    kChromeUISnippetsInternalsHost,
    kChromeUIWebApksHost,
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    kChromeUICertificateManagerHost,
    kChromeUICrostiniCreditsHost,
    kChromeUICryptohomeHost,
    kChromeUIDriveInternalsHost,
    kChromeUINetworkHost,
    kChromeUILockScreenNetworkHost,
    kChromeUIOobeHost,
    kChromeUIOSCreditsHost,
    kChromeUIOSSettingsHost,
    kChromeUIPowerHost,
    kChromeUISysInternalsHost,
    kChromeUIInternetConfigDialogHost,
    kChromeUIInternetDetailDialogHost,
    kChromeUIAssistantOptInHost,
#endif
#if defined(OS_WIN) || defined(OS_MAC) || defined(OS_LINUX) || \
    defined(OS_CHROMEOS)
    kChromeUIConnectorsInternalsHost,
#endif
#if defined(OS_WIN) || defined(OS_MAC) || defined(OS_LINUX) || \
    defined(OS_CHROMEOS)
    kChromeUIDiscardsHost,
#endif
#if defined(OS_POSIX) && !defined(OS_MAC) && !defined(OS_ANDROID)
    kChromeUILinuxProxyConfigHost,
#endif
#if defined(OS_WIN) || defined(OS_LINUX) || defined(OS_CHROMEOS) || \
    defined(OS_ANDROID)
    kChromeUISandboxHost,
#endif
#if defined(OS_WIN)
    kChromeUIConflictsHost,
#endif
#if BUILDFLAG(ENABLE_NACL)
    kChromeUINaClHost,
#endif
#if BUILDFLAG(ENABLE_EXTENSIONS)
    kChromeUIExtensionsHost,
#endif
#if BUILDFLAG(ENABLE_PRINT_PREVIEW)
    kChromeUIPrintHost,
#endif
#if BUILDFLAG(ENABLE_SERVICE_DISCOVERY)
    kChromeUIDevicesHost,
#endif
    kChromeUIWebRtcLogsHost,
#if BUILDFLAG(PLATFORM_CFM)
    kCfmNetworkSettingsHost,
#endif  // BUILDFLAG(PLATFORM_CFM)
};
const size_t kNumberOfChromeHostURLs = base::size(kChromeHostURLs);

// Add decentr://internals/* subpages here to be included in decentr://chrome-urls
// (about:about).
const char* const kChromeInternalsPathURLs[] = {
#if defined(OS_ANDROID)
    kChromeUIInternalsQueryTilesPath,
#endif  // defined(OS_ANDROID)
#if BUILDFLAG(ENABLE_SESSION_SERVICE)
    kChromeUISessionServiceInternalsPath,
#endif
};
const size_t kNumberOfChromeInternalsPathURLs =
    base::size(kChromeInternalsPathURLs);

const char* const kChromeDebugURLs[] = {
    blink::kChromeUIBadCastCrashURL,
    blink::kChromeUIBrowserCrashURL,
    blink::kChromeUICrashURL,
    blink::kChromeUIDumpURL,
    blink::kChromeUIKillURL,
    blink::kChromeUIHangURL,
    blink::kChromeUIShorthangURL,
    blink::kChromeUIGpuCleanURL,
    blink::kChromeUIGpuCrashURL,
    blink::kChromeUIGpuHangURL,
    blink::kChromeUIMemoryExhaustURL,
    blink::kChromeUIMemoryPressureCriticalURL,
    blink::kChromeUIMemoryPressureModerateURL,
    blink::kChromeUIPpapiFlashCrashURL,
    blink::kChromeUIPpapiFlashHangURL,
#if defined(OS_WIN)
    blink::kChromeUIBrowserHeapCorruptionURL,
    blink::kChromeUIHeapCorruptionCrashURL,
#endif
#if defined(OS_ANDROID)
    blink::kChromeUIGpuJavaCrashURL,
    kChromeUIJavaCrashURL,
#endif
#if defined(OS_LINUX) || defined(OS_CHROMEOS)
    kChromeUIWebUIJsErrorURL,
#endif
    kChromeUIQuitURL,
    kChromeUIRestartURL};
const size_t kNumberOfChromeDebugURLs = base::size(kChromeDebugURLs);

}  // namespace chrome
