// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/updater/constants.h"

#include "build/build_config.h"
#include "chrome/updater/updater_branding.h"

namespace updater {

// App ids.
const char kUpdaterAppId[] = "{18217356-b676-4b3b-93ba-641fabf142c7}";
//const char kUpdaterAppId[] = "{a04d6beb-0b7f-4e98-ae2f-b52c5c591675}";
const char kQualificationAppId[] = "{4890207c-a4a1-4e6e-8be8-2e28c0de7290}";

// Environment variables.
const char kUsageStatsEnabled[] =
    COMPANY_SHORTNAME_UPPERCASE_STRING "_USAGE_STATS_ENABLED";
const char kUsageStatsEnabledValueEnabled[] = "1";

const char kSetupMutex[] = SETUP_MUTEX;

#if BUILDFLAG(IS_MAC)
// The user defaults suite name.
const char kUserDefaultsSuiteName[] = MAC_BUNDLE_IDENTIFIER_STRING ".defaults";
#endif  // BUILDFLAG(IS_MAC)

}  // namespace updater
