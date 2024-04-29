// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// NOTE: You should probably not change the data in this file without changing
// |kCurrentDataVersion| in prepopulated_engines.json. See comments in
// GetDataVersion() below!

// Also see if the config at
// tools/search_engine_choice/generate_search_engine_icons_config.json needs to
// be updated, and then run
// tools/search_engine_choice/generate_search_engine_icons.py to refresh icons.

// Search engine tier per country.
// SearchEngineTier will be equal to kTopEngines for the top 5 engines,
// kTyingEngines for tying 5+th engines and kRemainingEngines for the
// remaining engines.
enum class SearchEngineTier {
  kTopEngines = 1,
  kTyingEngines,
  kRemainingEngines,
};

// `PrepopulateEngine` and tier per country.
struct EngineAndTier {
  SearchEngineTier tier;
  const raw_ptr<PrepopulatedEngine const> search_engine;
};

// Put the engines within each country sorted based on some internal logic.
// The default will be the first engine.
// TODO(b/326396215): Link to documentation on this once it is published.

// Default (for countries with no better engine set)
constexpr EngineAndTier engines_default[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Note, the below entries are sorted by country code, not the name in comment.
// Engine selection by country ------------------------------------------------
// clang-format off
// United Arab Emirates
constexpr EngineAndTier engines_AE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Albania
constexpr EngineAndTier engines_AL[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Argentina
constexpr EngineAndTier engines_AR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Austria
constexpr EngineAndTier engines_AT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Australia
constexpr EngineAndTier engines_AU[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Bosnia and Herzegovina
constexpr EngineAndTier engines_BA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Belgium
constexpr EngineAndTier engines_BE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Bulgaria
constexpr EngineAndTier engines_BG[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Bahrain
constexpr EngineAndTier engines_BH[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Burundi
constexpr EngineAndTier engines_BI[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Brunei
constexpr EngineAndTier engines_BN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Bolivia
constexpr EngineAndTier engines_BO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Brazil
constexpr EngineAndTier engines_BR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Belarus
constexpr EngineAndTier engines_BY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Belize
constexpr EngineAndTier engines_BZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Canada
constexpr EngineAndTier engines_CA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Switzerland
constexpr EngineAndTier engines_CH[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Chile
constexpr EngineAndTier engines_CL[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// China
constexpr EngineAndTier engines_CN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Colombia
constexpr EngineAndTier engines_CO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Costa Rica
constexpr EngineAndTier engines_CR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Republic of Cyprus
constexpr EngineAndTier engines_CY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Czech Republic
constexpr EngineAndTier engines_CZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Germany
constexpr EngineAndTier engines_DE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Denmark
constexpr EngineAndTier engines_DK[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};


// Dominican Republic
constexpr EngineAndTier engines_DO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Algeria
constexpr EngineAndTier engines_DZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Ecuador
constexpr EngineAndTier engines_EC[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Estonia
constexpr EngineAndTier engines_EE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Egypt
constexpr EngineAndTier engines_EG[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Spain
constexpr EngineAndTier engines_ES[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Finland
constexpr EngineAndTier engines_FI[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Faroe Islands
constexpr EngineAndTier engines_FO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// France
constexpr EngineAndTier engines_FR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// United Kingdom
constexpr EngineAndTier engines_GB[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Greece
constexpr EngineAndTier engines_GR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Guatemala
constexpr EngineAndTier engines_GT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Hong Kong
constexpr EngineAndTier engines_HK[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Honduras
constexpr EngineAndTier engines_HN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Croatia
constexpr EngineAndTier engines_HR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Hungary
constexpr EngineAndTier engines_HU[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Indonesia
constexpr EngineAndTier engines_ID[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Ireland
constexpr EngineAndTier engines_IE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Israel
constexpr EngineAndTier engines_IL[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// India
constexpr EngineAndTier engines_IN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Iraq
constexpr EngineAndTier engines_IQ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Iran
constexpr EngineAndTier engines_IR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Iceland
constexpr EngineAndTier engines_IS[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Italy
constexpr EngineAndTier engines_IT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Jamaica
constexpr EngineAndTier engines_JM[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Jordan
constexpr EngineAndTier engines_JO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Japan
constexpr EngineAndTier engines_JP[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Kenya
constexpr EngineAndTier engines_KE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// South Korea
constexpr EngineAndTier engines_KR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Kuwait
constexpr EngineAndTier engines_KW[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Kazakhstan
constexpr EngineAndTier engines_KZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Lebanon
constexpr EngineAndTier engines_LB[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Liechtenstein
constexpr EngineAndTier engines_LI[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Lithuania
constexpr EngineAndTier engines_LT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Luxembourg
constexpr EngineAndTier engines_LU[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Latvia
constexpr EngineAndTier engines_LV[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Libya
constexpr EngineAndTier engines_LY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Morocco
constexpr EngineAndTier engines_MA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Monaco
constexpr EngineAndTier engines_MC[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Moldova
constexpr EngineAndTier engines_MD[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Montenegro
constexpr EngineAndTier engines_ME[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Macedonia
constexpr EngineAndTier engines_MK[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Malta
constexpr EngineAndTier engines_MT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Mexico
constexpr EngineAndTier engines_MX[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Malaysia
constexpr EngineAndTier engines_MY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Nicaragua
constexpr EngineAndTier engines_NI[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Netherlands
constexpr EngineAndTier engines_NL[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Norway
constexpr EngineAndTier engines_NO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// New Zealand
constexpr EngineAndTier engines_NZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Oman
constexpr EngineAndTier engines_OM[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Panama
constexpr EngineAndTier engines_PA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Peru
constexpr EngineAndTier engines_PE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Philippines
constexpr EngineAndTier engines_PH[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Pakistan
constexpr EngineAndTier engines_PK[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Poland
constexpr EngineAndTier engines_PL[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Puerto Rico
constexpr EngineAndTier engines_PR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Portugal
constexpr EngineAndTier engines_PT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Paraguay
constexpr EngineAndTier engines_PY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Qatar
constexpr EngineAndTier engines_QA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Romania
constexpr EngineAndTier engines_RO[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Serbia
constexpr EngineAndTier engines_RS[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Russia
constexpr EngineAndTier engines_RU[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Rwanda
constexpr EngineAndTier engines_RW[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Saudi Arabia
constexpr EngineAndTier engines_SA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Sweden
constexpr EngineAndTier engines_SE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Singapore
constexpr EngineAndTier engines_SG[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Slovenia
constexpr EngineAndTier engines_SI[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Slovakia
constexpr EngineAndTier engines_SK[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// El Salvador
constexpr EngineAndTier engines_SV[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Syria
constexpr EngineAndTier engines_SY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Thailand
constexpr EngineAndTier engines_TH[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Tunisia
constexpr EngineAndTier engines_TN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Turkey
constexpr EngineAndTier engines_TR[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Trinidad and Tobago
constexpr EngineAndTier engines_TT[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Taiwan
constexpr EngineAndTier engines_TW[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Tanzania
constexpr EngineAndTier engines_TZ[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Ukraine
constexpr EngineAndTier engines_UA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// United States
constexpr EngineAndTier engines_US[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Uruguay
constexpr EngineAndTier engines_UY[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Venezuela
constexpr EngineAndTier engines_VE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Vietnam
constexpr EngineAndTier engines_VN[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Yemen
constexpr EngineAndTier engines_YE[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// South Africa
constexpr EngineAndTier engines_ZA[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// Zimbabwe
constexpr EngineAndTier engines_ZW[] = {
    {SearchEngineTier::kTopEngines, &google},
    {SearchEngineTier::kTopEngines, &duckduckgo},
    {SearchEngineTier::kTopEngines, &bing},
    {SearchEngineTier::kTopEngines, &yahoo},
    {SearchEngineTier::kTopEngines, &ecosia},
    {SearchEngineTier::kTopEngines, &aol},
    {SearchEngineTier::kTopEngines, &ask},
    {SearchEngineTier::kTopEngines, &baidu},
    {SearchEngineTier::kTopEngines, &internet_archive},
    {SearchEngineTier::kTopEngines, &presearch},
};

// clang-format on
// ----------------------------------------------------------------------------

const std::vector<EngineAndTier> GetPrepopulationSetFromCountryID(
    int country_id) {
  const EngineAndTier* engines;
  size_t num_engines;
  // If you add a new country make sure to update the unit test for coverage.
  switch (country_id) {
#define UNHANDLED_COUNTRY(code1, code2) \
  case country_codes::CountryCharsToCountryID((#code1)[0], (#code2)[0]):
#define END_UNHANDLED_COUNTRIES(code1, code2)      \
  engines = engines_##code1##code2;                \
  num_engines = std::size(engines_##code1##code2); \
  break;
#define DECLARE_COUNTRY(code1, code2) \
  UNHANDLED_COUNTRY(code1, code2)     \
  END_UNHANDLED_COUNTRIES(code1, code2)

    // Countries with their own, dedicated engine set.
    DECLARE_COUNTRY(A, E)  // United Arab Emirates
    DECLARE_COUNTRY(A, L)  // Albania
    DECLARE_COUNTRY(A, R)  // Argentina
    DECLARE_COUNTRY(A, T)  // Austria
    DECLARE_COUNTRY(A, U)  // Australia
    DECLARE_COUNTRY(B, A)  // Bosnia and Herzegovina
    DECLARE_COUNTRY(B, E)  // Belgium
    DECLARE_COUNTRY(B, G)  // Bulgaria
    DECLARE_COUNTRY(B, H)  // Bahrain
    DECLARE_COUNTRY(B, I)  // Burundi
    DECLARE_COUNTRY(B, N)  // Brunei
    DECLARE_COUNTRY(B, O)  // Bolivia
    DECLARE_COUNTRY(B, R)  // Brazil
    DECLARE_COUNTRY(B, Y)  // Belarus
    DECLARE_COUNTRY(B, Z)  // Belize
    DECLARE_COUNTRY(C, A)  // Canada
    DECLARE_COUNTRY(C, H)  // Switzerland
    DECLARE_COUNTRY(C, L)  // Chile
    DECLARE_COUNTRY(C, N)  // China
    DECLARE_COUNTRY(C, O)  // Colombia
    DECLARE_COUNTRY(C, R)  // Costa Rica
    DECLARE_COUNTRY(C, Y)  // Republic of Cyprus
    DECLARE_COUNTRY(C, Z)  // Czech Republic
    DECLARE_COUNTRY(D, E)  // Germany
    DECLARE_COUNTRY(D, K)  // Denmark
    DECLARE_COUNTRY(D, O)  // Dominican Republic
    DECLARE_COUNTRY(D, Z)  // Algeria
    DECLARE_COUNTRY(E, C)  // Ecuador
    DECLARE_COUNTRY(E, E)  // Estonia
    DECLARE_COUNTRY(E, G)  // Egypt
    DECLARE_COUNTRY(E, S)  // Spain
    DECLARE_COUNTRY(F, I)  // Finland
    DECLARE_COUNTRY(F, O)  // Faroe Islands
    DECLARE_COUNTRY(F, R)  // France
    DECLARE_COUNTRY(G, B)  // United Kingdom
    DECLARE_COUNTRY(G, R)  // Greece
    DECLARE_COUNTRY(G, T)  // Guatemala
    DECLARE_COUNTRY(H, K)  // Hong Kong
    DECLARE_COUNTRY(H, N)  // Honduras
    DECLARE_COUNTRY(H, R)  // Croatia
    DECLARE_COUNTRY(H, U)  // Hungary
    DECLARE_COUNTRY(I, D)  // Indonesia
    DECLARE_COUNTRY(I, E)  // Ireland
    DECLARE_COUNTRY(I, L)  // Israel
    DECLARE_COUNTRY(I, N)  // India
    DECLARE_COUNTRY(I, Q)  // Iraq
    DECLARE_COUNTRY(I, R)  // Iran
    DECLARE_COUNTRY(I, S)  // Iceland
    DECLARE_COUNTRY(I, T)  // Italy
    DECLARE_COUNTRY(J, M)  // Jamaica
    DECLARE_COUNTRY(J, O)  // Jordan
    DECLARE_COUNTRY(J, P)  // Japan
    DECLARE_COUNTRY(K, E)  // Kenya
    DECLARE_COUNTRY(K, R)  // South Korea
    DECLARE_COUNTRY(K, W)  // Kuwait
    DECLARE_COUNTRY(K, Z)  // Kazakhstan
    DECLARE_COUNTRY(L, B)  // Lebanon
    DECLARE_COUNTRY(L, I)  // Liechtenstein
    DECLARE_COUNTRY(L, T)  // Lithuania
    DECLARE_COUNTRY(L, U)  // Luxembourg
    DECLARE_COUNTRY(L, V)  // Latvia
    DECLARE_COUNTRY(L, Y)  // Libya
    DECLARE_COUNTRY(M, A)  // Morocco
    DECLARE_COUNTRY(M, C)  // Monaco
    DECLARE_COUNTRY(M, D)  // Moldova
    DECLARE_COUNTRY(M, E)  // Montenegro
    DECLARE_COUNTRY(M, K)  // Macedonia
    DECLARE_COUNTRY(M, T)  // Malta
    DECLARE_COUNTRY(M, X)  // Mexico
    DECLARE_COUNTRY(M, Y)  // Malaysia
    DECLARE_COUNTRY(N, I)  // Nicaragua
    DECLARE_COUNTRY(N, L)  // Netherlands
    DECLARE_COUNTRY(N, O)  // Norway
    DECLARE_COUNTRY(N, Z)  // New Zealand
    DECLARE_COUNTRY(O, M)  // Oman
    DECLARE_COUNTRY(P, A)  // Panama
    DECLARE_COUNTRY(P, E)  // Peru
    DECLARE_COUNTRY(P, H)  // Philippines
    DECLARE_COUNTRY(P, K)  // Pakistan
    DECLARE_COUNTRY(P, L)  // Poland
    DECLARE_COUNTRY(P, R)  // Puerto Rico
    DECLARE_COUNTRY(P, T)  // Portugal
    DECLARE_COUNTRY(P, Y)  // Paraguay
    DECLARE_COUNTRY(Q, A)  // Qatar
    DECLARE_COUNTRY(R, O)  // Romania
    DECLARE_COUNTRY(R, S)  // Serbia
    DECLARE_COUNTRY(R, U)  // Russia
    DECLARE_COUNTRY(R, W)  // Rwanda
    DECLARE_COUNTRY(S, A)  // Saudi Arabia
    DECLARE_COUNTRY(S, E)  // Sweden
    DECLARE_COUNTRY(S, G)  // Singapore
    DECLARE_COUNTRY(S, I)  // Slovenia
    DECLARE_COUNTRY(S, K)  // Slovakia
    DECLARE_COUNTRY(S, V)  // El Salvador
    DECLARE_COUNTRY(S, Y)  // Syria
    DECLARE_COUNTRY(T, H)  // Thailand
    DECLARE_COUNTRY(T, N)  // Tunisia
    DECLARE_COUNTRY(T, R)  // Turkey
    DECLARE_COUNTRY(T, T)  // Trinidad and Tobago
    DECLARE_COUNTRY(T, W)  // Taiwan
    DECLARE_COUNTRY(T, Z)  // Tanzania
    DECLARE_COUNTRY(U, A)  // Ukraine
    DECLARE_COUNTRY(U, S)  // United States
    DECLARE_COUNTRY(U, Y)  // Uruguay
    DECLARE_COUNTRY(V, E)  // Venezuela
    DECLARE_COUNTRY(V, N)  // Vietnam
    DECLARE_COUNTRY(Y, E)  // Yemen
    DECLARE_COUNTRY(Z, A)  // South Africa
    DECLARE_COUNTRY(Z, W)  // Zimbabwe

    // Countries using the "Australia" engine set.
    UNHANDLED_COUNTRY(C, C)  // Cocos Islands
    UNHANDLED_COUNTRY(C, X)  // Christmas Island
    UNHANDLED_COUNTRY(H, M)  // Heard Island and McDonald Islands
    UNHANDLED_COUNTRY(N, F)  // Norfolk Island
    END_UNHANDLED_COUNTRIES(A, U)

    // Countries using the "China" engine set.
    UNHANDLED_COUNTRY(M, O)  // Macao
    END_UNHANDLED_COUNTRIES(C, N)

    // Countries using the "Denmark" engine set.
    UNHANDLED_COUNTRY(G, L)  // Greenland
    END_UNHANDLED_COUNTRIES(D, K)

    // Countries using the "Spain" engine set.
    UNHANDLED_COUNTRY(A, D)  // Andorra
    UNHANDLED_COUNTRY(E, A)  // Ceuta & Melilla (not in ISO 3166-1 but included
                             // in some Chrome country code lists)
    UNHANDLED_COUNTRY(I, C)  // Canary Islands (not in ISO 3166-1 but included
                             // in some Chrome country code lists)
    END_UNHANDLED_COUNTRIES(E, S)

    // Countries using the "Finland" engine set.
    UNHANDLED_COUNTRY(A, X)  // Aland Islands
    END_UNHANDLED_COUNTRIES(F, I)

    // Countries using the "France" engine set.
    UNHANDLED_COUNTRY(B, F)  // Burkina Faso
    UNHANDLED_COUNTRY(B, J)  // Benin
    UNHANDLED_COUNTRY(B, L)  // St. Barthélemy
    UNHANDLED_COUNTRY(C, D)  // Congo - Kinshasa
    UNHANDLED_COUNTRY(C, F)  // Central African Republic
    UNHANDLED_COUNTRY(C, G)  // Congo - Brazzaville
    UNHANDLED_COUNTRY(C, I)  // Ivory Coast
    UNHANDLED_COUNTRY(C, M)  // Cameroon
    UNHANDLED_COUNTRY(D, J)  // Djibouti
    UNHANDLED_COUNTRY(G, A)  // Gabon
    UNHANDLED_COUNTRY(G, F)  // French Guiana
    UNHANDLED_COUNTRY(G, N)  // Guinea
    UNHANDLED_COUNTRY(G, P)  // Guadeloupe
    UNHANDLED_COUNTRY(H, T)  // Haiti
#if BUILDFLAG(IS_WIN)
    UNHANDLED_COUNTRY(I, P)  // Clipperton Island ('IP' is an WinXP-ism; ISO
                             //                    includes it with France)
#endif
    UNHANDLED_COUNTRY(M, F)  // Saint Martin
    UNHANDLED_COUNTRY(M, L)  // Mali
    UNHANDLED_COUNTRY(M, Q)  // Martinique
    UNHANDLED_COUNTRY(N, C)  // New Caledonia
    UNHANDLED_COUNTRY(N, E)  // Niger
    UNHANDLED_COUNTRY(P, F)  // French Polynesia
    UNHANDLED_COUNTRY(P, M)  // Saint Pierre and Miquelon
    UNHANDLED_COUNTRY(R, E)  // Reunion
    UNHANDLED_COUNTRY(S, N)  // Senegal
    UNHANDLED_COUNTRY(T, D)  // Chad
    UNHANDLED_COUNTRY(T, F)  // French Southern Territories
    UNHANDLED_COUNTRY(T, G)  // Togo
    UNHANDLED_COUNTRY(W, F)  // Wallis and Futuna
    UNHANDLED_COUNTRY(Y, T)  // Mayotte
    END_UNHANDLED_COUNTRIES(F, R)

    // Countries using the "Italy" engine set.
    UNHANDLED_COUNTRY(S, M)  // San Marino
    UNHANDLED_COUNTRY(V, A)  // Vatican
    END_UNHANDLED_COUNTRIES(I, T)

    // Countries using the "Morocco" engine set.
    UNHANDLED_COUNTRY(E, H)  // Western Sahara
    END_UNHANDLED_COUNTRIES(M, A)

    // Countries using the "Netherlands" engine set.
    UNHANDLED_COUNTRY(A, N)  // Netherlands Antilles
    UNHANDLED_COUNTRY(A, W)  // Aruba
    END_UNHANDLED_COUNTRIES(N, L)

    // Countries using the "Norway" engine set.
    UNHANDLED_COUNTRY(B, V)  // Bouvet Island
    UNHANDLED_COUNTRY(S, J)  // Svalbard and Jan Mayen
    END_UNHANDLED_COUNTRIES(N, O)

    // Countries using the "New Zealand" engine set.
    UNHANDLED_COUNTRY(C, K)  // Cook Islands
    UNHANDLED_COUNTRY(N, U)  // Niue
    UNHANDLED_COUNTRY(T, K)  // Tokelau
    END_UNHANDLED_COUNTRIES(N, Z)

    // Countries using the "Portugal" engine set.
    UNHANDLED_COUNTRY(C, V)  // Cape Verde
    UNHANDLED_COUNTRY(G, W)  // Guinea-Bissau
    UNHANDLED_COUNTRY(M, Z)  // Mozambique
    UNHANDLED_COUNTRY(S, T)  // Sao Tome and Principe
    UNHANDLED_COUNTRY(T, L)  // Timor-Leste
    END_UNHANDLED_COUNTRIES(P, T)

    // Countries using the "Russia" engine set.
    UNHANDLED_COUNTRY(A, M)  // Armenia
    UNHANDLED_COUNTRY(A, Z)  // Azerbaijan
    UNHANDLED_COUNTRY(K, G)  // Kyrgyzstan
    UNHANDLED_COUNTRY(T, J)  // Tajikistan
    UNHANDLED_COUNTRY(T, M)  // Turkmenistan
    UNHANDLED_COUNTRY(U, Z)  // Uzbekistan
    END_UNHANDLED_COUNTRIES(R, U)

    // Countries using the "Saudi Arabia" engine set.
    UNHANDLED_COUNTRY(M, R)  // Mauritania
    UNHANDLED_COUNTRY(P, S)  // Palestinian Territory
    UNHANDLED_COUNTRY(S, D)  // Sudan
    END_UNHANDLED_COUNTRIES(S, A)

    // Countries using the "United Kingdom" engine set.
    UNHANDLED_COUNTRY(B, M)  // Bermuda
    UNHANDLED_COUNTRY(C, Q)  // Sark
    UNHANDLED_COUNTRY(F, K)  // Falkland Islands
    UNHANDLED_COUNTRY(G, G)  // Guernsey
    UNHANDLED_COUNTRY(G, I)  // Gibraltar
    UNHANDLED_COUNTRY(G, S)  // South Georgia and the South Sandwich
                             //   Islands
    UNHANDLED_COUNTRY(I, M)  // Isle of Man
    UNHANDLED_COUNTRY(I, O)  // British Indian Ocean Territory
    UNHANDLED_COUNTRY(J, E)  // Jersey
    UNHANDLED_COUNTRY(K, Y)  // Cayman Islands
    UNHANDLED_COUNTRY(M, S)  // Montserrat
    UNHANDLED_COUNTRY(P, N)  // Pitcairn Islands
    UNHANDLED_COUNTRY(S, H)  // Saint Helena, Ascension Island, and Tristan da
                             //   Cunha
    UNHANDLED_COUNTRY(T, C)  // Turks and Caicos Islands
    UNHANDLED_COUNTRY(V, G)  // British Virgin Islands
    END_UNHANDLED_COUNTRIES(G, B)

    // Countries using the "United States" engine set.
    UNHANDLED_COUNTRY(A, S)  // American Samoa
    UNHANDLED_COUNTRY(G, U)  // Guam
    UNHANDLED_COUNTRY(M, P)  // Northern Mariana Islands
    UNHANDLED_COUNTRY(U, M)  // U.S. Minor Outlying Islands
    UNHANDLED_COUNTRY(V, I)  // U.S. Virgin Islands
    END_UNHANDLED_COUNTRIES(U, S)

    // Countries using the "default" engine set.
    UNHANDLED_COUNTRY(A, F)  // Afghanistan
    UNHANDLED_COUNTRY(A, G)  // Antigua and Barbuda
    UNHANDLED_COUNTRY(A, I)  // Anguilla
    UNHANDLED_COUNTRY(A, O)  // Angola
    UNHANDLED_COUNTRY(A, Q)  // Antarctica
    UNHANDLED_COUNTRY(B, B)  // Barbados
    UNHANDLED_COUNTRY(B, D)  // Bangladesh
    UNHANDLED_COUNTRY(B, S)  // Bahamas
    UNHANDLED_COUNTRY(B, T)  // Bhutan
    UNHANDLED_COUNTRY(B, W)  // Botswana
    UNHANDLED_COUNTRY(C, U)  // Cuba
    UNHANDLED_COUNTRY(D, M)  // Dominica
    UNHANDLED_COUNTRY(E, R)  // Eritrea
    UNHANDLED_COUNTRY(E, T)  // Ethiopia
    UNHANDLED_COUNTRY(F, J)  // Fiji
    UNHANDLED_COUNTRY(F, M)  // Micronesia
    UNHANDLED_COUNTRY(G, D)  // Grenada
    UNHANDLED_COUNTRY(G, E)  // Georgia
    UNHANDLED_COUNTRY(G, H)  // Ghana
    UNHANDLED_COUNTRY(G, M)  // Gambia
    UNHANDLED_COUNTRY(G, Q)  // Equatorial Guinea
    UNHANDLED_COUNTRY(G, Y)  // Guyana
    UNHANDLED_COUNTRY(K, H)  // Cambodia
    UNHANDLED_COUNTRY(K, I)  // Kiribati
    UNHANDLED_COUNTRY(K, M)  // Comoros
    UNHANDLED_COUNTRY(K, N)  // Saint Kitts and Nevis
    UNHANDLED_COUNTRY(K, P)  // North Korea
    UNHANDLED_COUNTRY(L, A)  // Laos
    UNHANDLED_COUNTRY(L, C)  // Saint Lucia
    UNHANDLED_COUNTRY(L, K)  // Sri Lanka
    UNHANDLED_COUNTRY(L, R)  // Liberia
    UNHANDLED_COUNTRY(L, S)  // Lesotho
    UNHANDLED_COUNTRY(M, G)  // Madagascar
    UNHANDLED_COUNTRY(M, H)  // Marshall Islands
    UNHANDLED_COUNTRY(M, M)  // Myanmar
    UNHANDLED_COUNTRY(M, N)  // Mongolia
    UNHANDLED_COUNTRY(M, U)  // Mauritius
    UNHANDLED_COUNTRY(M, V)  // Maldives
    UNHANDLED_COUNTRY(M, W)  // Malawi
    UNHANDLED_COUNTRY(N, A)  // Namibia
    UNHANDLED_COUNTRY(N, G)  // Nigeria
    UNHANDLED_COUNTRY(N, P)  // Nepal
    UNHANDLED_COUNTRY(N, R)  // Nauru
    UNHANDLED_COUNTRY(P, G)  // Papua New Guinea
    UNHANDLED_COUNTRY(P, W)  // Palau
    UNHANDLED_COUNTRY(S, B)  // Solomon Islands
    UNHANDLED_COUNTRY(S, C)  // Seychelles
    UNHANDLED_COUNTRY(S, L)  // Sierra Leone
    UNHANDLED_COUNTRY(S, O)  // Somalia
    UNHANDLED_COUNTRY(S, R)  // Suriname
    UNHANDLED_COUNTRY(S, Z)  // Swaziland
    UNHANDLED_COUNTRY(T, O)  // Tonga
    UNHANDLED_COUNTRY(T, V)  // Tuvalu
    UNHANDLED_COUNTRY(U, G)  // Uganda
    UNHANDLED_COUNTRY(V, C)  // Saint Vincent and the Grenadines
    UNHANDLED_COUNTRY(V, U)  // Vanuatu
    UNHANDLED_COUNTRY(W, S)  // Samoa
    UNHANDLED_COUNTRY(Z, M)  // Zambia
    case country_codes::kCountryIDUnknown:
    default:  // Unhandled location
      END_UNHANDLED_COUNTRIES(def, ault)
  }

  std::vector<EngineAndTier> t_url;
  for (size_t i = 0; i < num_engines; i++) {
    t_url.push_back(engines[i]);
  }
  return t_url;
}
