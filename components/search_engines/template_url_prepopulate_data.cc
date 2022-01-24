// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "components/search_engines/template_url_prepopulate_data.h"

#include "base/cxx17_backports.h"
#include "base/logging.h"
#include "build/build_config.h"
#include "components/country_codes/country_codes.h"
#include "components/pref_registry/pref_registry_syncable.h"
#include "components/prefs/pref_service.h"
#include "components/search_engines/prepopulated_engines.h"
#include "components/search_engines/search_engines_pref_names.h"
#include "components/search_engines/template_url_data.h"
#include "components/search_engines/template_url_data_util.h"

namespace TemplateURLPrepopulateData {

// Helpers --------------------------------------------------------------------

namespace {
// NOTE: You should probably not change the data in this file without changing
// |kCurrentDataVersion| in prepopulated_engines.json. See comments in
// GetDataVersion() below!

// Put the engines within each country in order with most interesting/important
// first.  The default will be the first engine.

// Default (for countries with no better engine set)
const PrepopulatedEngine* const engines_default[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,    
};

// Note, the below entries are sorted by country code, not the name in comment.
// Engine selection by country ------------------------------------------------
// United Arab Emirates
const PrepopulatedEngine* const engines_AE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,   

};

// Albania
const PrepopulatedEngine* const engines_AL[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com, 
};

// Argentina
const PrepopulatedEngine* const engines_AR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Austria
const PrepopulatedEngine* const engines_AT[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_at,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Australia
const PrepopulatedEngine* const engines_AU[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_au,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Bosnia and Herzegovina
const PrepopulatedEngine* const engines_BA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,  
};

// Belgium
const PrepopulatedEngine* const engines_BE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com, 
};

// Bulgaria
const PrepopulatedEngine* const engines_BG[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Bahrain
const PrepopulatedEngine* const engines_BH[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,  
};

// Burundi
const PrepopulatedEngine* const engines_BI[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru, 
};

// Brunei
const PrepopulatedEngine* const engines_BN[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Bolivia
const PrepopulatedEngine* const engines_BO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Brazil
const PrepopulatedEngine* const engines_BR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_br,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Belarus
const PrepopulatedEngine* const engines_BY[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_by,
};

// Belize
const PrepopulatedEngine* const engines_BZ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Canada
const PrepopulatedEngine* const engines_CA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_ca,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Switzerland
const PrepopulatedEngine* const engines_CH[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_ch,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Chile
const PrepopulatedEngine* const engines_CL[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_es,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// China
const PrepopulatedEngine* const engines_CN[] = {
    &baidu,
    &sogou,
    &google,
    &bing,
    &so_360,
    &yahoo,
    &yandex_com,
    &duckduckgo,
    &ask,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// Colombia
const PrepopulatedEngine* const engines_CO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_es,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Costa Rica
const PrepopulatedEngine* const engines_CR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Czech Republic
const PrepopulatedEngine* const engines_CZ[] = {
    &google,
    &seznam_cz,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,  
    &yandex_com,
    &internet_archive,
};

// Germany
const PrepopulatedEngine* const engines_DE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_de,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Denmark
const PrepopulatedEngine* const engines_DK[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_dk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Dominican Republic
const PrepopulatedEngine* const engines_DO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Algeria
const PrepopulatedEngine* const engines_DZ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_uk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Ecuador
const PrepopulatedEngine* const engines_EC[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Estonia
const PrepopulatedEngine* const engines_EE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Egypt
const PrepopulatedEngine* const engines_EG[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Spain
const PrepopulatedEngine* const engines_ES[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_es,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Finland
const PrepopulatedEngine* const engines_FI[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_fi,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Faroe Islands
const PrepopulatedEngine* const engines_FO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_dk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// France
const PrepopulatedEngine* const engines_FR[] = {
    &google,
    &bing,
    &yahoo_fr,
    &qwant,
    &ecosia,
    &baidu,
    &yandex_com,
    &duckduckgo,
    &ask,
    &aol,
    &internet_archive,
    &mail_ru,
};

// United Kingdom
const PrepopulatedEngine* const engines_GB[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_uk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Greece
const PrepopulatedEngine* const engines_GR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Guatemala
const PrepopulatedEngine* const engines_GT[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Hong Kong
const PrepopulatedEngine* const engines_HK[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_hk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Honduras
const PrepopulatedEngine* const engines_HN[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Croatia
const PrepopulatedEngine* const engines_HR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Hungary
const PrepopulatedEngine* const engines_HU[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Indonesia
const PrepopulatedEngine* const engines_ID[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_id,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Ireland
const PrepopulatedEngine* const engines_IE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Israel
const PrepopulatedEngine* const engines_IL[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// India
const PrepopulatedEngine* const engines_IN[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_in,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Iraq
const PrepopulatedEngine* const engines_IQ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_uk,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Iran
const PrepopulatedEngine* const engines_IR[] = {
    &google,
    &bing,
    &yahoo,
    &ask,
    &naver,
    &baidu,
    &yandex_com,
    &duckduckgo,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// Iceland
const PrepopulatedEngine* const engines_IS[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Italy
const PrepopulatedEngine* const engines_IT[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &ecosia,
};

// Jamaica
const PrepopulatedEngine* const engines_JM[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Jordan
const PrepopulatedEngine* const engines_JO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Japan
const PrepopulatedEngine* const engines_JP[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_jp,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Kenya
const PrepopulatedEngine* const engines_KE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// South Korea
const PrepopulatedEngine* const engines_KR[] = {
    &google,
    &naver,
    &bing,
    &daum,
    &yahoo,
    &baidu,
    &yandex_com,
    &duckduckgo,
    &ask,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// Kuwait
const PrepopulatedEngine* const engines_KW[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Kazakhstan
const PrepopulatedEngine* const engines_KZ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_kz,
};

// Lebanon
const PrepopulatedEngine* const engines_LB[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Liechtenstein
const PrepopulatedEngine* const engines_LI[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Lithuania
const PrepopulatedEngine* const engines_LT[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Luxembourg
const PrepopulatedEngine* const engines_LU[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Latvia
const PrepopulatedEngine* const engines_LV[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Libya
const PrepopulatedEngine* const engines_LY[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Morocco
const PrepopulatedEngine* const engines_MA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_fr,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Monaco
const PrepopulatedEngine* const engines_MC[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &qwant,
    &baidu,
    &yandex_com,
    &ask,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// Moldova
const PrepopulatedEngine* const engines_MD[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Montenegro
const PrepopulatedEngine* const engines_ME[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Macedonia
const PrepopulatedEngine* const engines_MK[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Mexico
const PrepopulatedEngine* const engines_MX[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_mx,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Malaysia
const PrepopulatedEngine* const engines_MY[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_my,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Nicaragua
const PrepopulatedEngine* const engines_NI[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &ecosia,
};

// Netherlands
const PrepopulatedEngine* const engines_NL[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_nl,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Norway
const PrepopulatedEngine* const engines_NO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// New Zealand
const PrepopulatedEngine* const engines_NZ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_nz,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Oman
const PrepopulatedEngine* const engines_OM[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &ask,
};

// Panama
const PrepopulatedEngine* const engines_PA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Peru
const PrepopulatedEngine* const engines_PE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_es,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Philippines
const PrepopulatedEngine* const engines_PH[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Pakistan
const PrepopulatedEngine* const engines_PK[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Poland
const PrepopulatedEngine* const engines_PL[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Puerto Rico
const PrepopulatedEngine* const engines_PR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Portugal
const PrepopulatedEngine* const engines_PT[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Paraguay
const PrepopulatedEngine* const engines_PY[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Qatar
const PrepopulatedEngine* const engines_QA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Romania
const PrepopulatedEngine* const engines_RO[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Serbia
const PrepopulatedEngine* const engines_RS[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Russia
const PrepopulatedEngine* const engines_RU[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Rwanda
const PrepopulatedEngine* const engines_RW[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Saudi Arabia
const PrepopulatedEngine* const engines_SA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Sweden
const PrepopulatedEngine* const engines_SE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_se,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Singapore
const PrepopulatedEngine* const engines_SG[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Slovenia
const PrepopulatedEngine* const engines_SI[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Slovakia
const PrepopulatedEngine* const engines_SK[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &seznam_cz,
    &baidu,
    &yandex_com,
    &ask,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// El Salvador
const PrepopulatedEngine* const engines_SV[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Syria
const PrepopulatedEngine* const engines_SY[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Thailand
const PrepopulatedEngine* const engines_TH[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Tunisia
const PrepopulatedEngine* const engines_TN[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_fr,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// Turkey
const PrepopulatedEngine* const engines_TR[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_tr,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_tr,
};

// Trinidad and Tobago
const PrepopulatedEngine* const engines_TT[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Taiwan
const PrepopulatedEngine* const engines_TW[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_tw,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Tanzania
const PrepopulatedEngine* const engines_TZ[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Ukraine
const PrepopulatedEngine* const engines_UA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ua,
};

// United States
const PrepopulatedEngine* const engines_US[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Uruguay
const PrepopulatedEngine* const engines_UY[] = {
    &google,
    &bing,
    &yahoo,
    &duckduckgo,
    &ecosia,
};

// Venezuela
const PrepopulatedEngine* const engines_VE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo_ve,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Vietnam
const PrepopulatedEngine* const engines_VN[] = {
    &google,
    &coccoc,
    &bing,
    &yahoo,
    &baidu,
    &yandex_com,
    &duckduckgo,
    &ask,
    &ecosia,
    &aol,
    &internet_archive,
    &mail_ru,
};

// Yemen
const PrepopulatedEngine* const engines_YE[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_ru,
};

// South Africa
const PrepopulatedEngine* const engines_ZA[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};

// Zimbabwe
const PrepopulatedEngine* const engines_ZW[] = {
    &google,
    &duckduckgo,
    &bing,
    &yahoo,
    &ecosia,
    &aol,
    &ask,
    &baidu,
    &mail_ru,
    &internet_archive,
    &yandex_com,
};
// ----------------------------------------------------------------------------

std::vector<std::unique_ptr<TemplateURLData>> GetPrepopulationSetFromCountryID(
    int country_id) {
  const PrepopulatedEngine* const* engines;
  size_t num_engines;
  // If you add a new country make sure to update the unit test for coverage.
  switch (country_id) {
#define UNHANDLED_COUNTRY(code1, code2) \
  case country_codes::CountryCharsToCountryID((#code1)[0], (#code2)[0]):
#define END_UNHANDLED_COUNTRIES(code1, code2)       \
  engines = engines_##code1##code2;                 \
  num_engines = base::size(engines_##code1##code2); \
  break;
#define DECLARE_COUNTRY(code1, code2)\
    UNHANDLED_COUNTRY(code1, code2)\
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
    END_UNHANDLED_COUNTRIES(E, S)

    // Countries using the "Finland" engine set.
    UNHANDLED_COUNTRY(A, X)  // Aland Islands
    END_UNHANDLED_COUNTRIES(F, I)

    // Countries using the "France" engine set.
    UNHANDLED_COUNTRY(B, F)  // Burkina Faso
    UNHANDLED_COUNTRY(B, J)  // Benin
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
#if defined(OS_WIN)
    UNHANDLED_COUNTRY(I, P)  // Clipperton Island ('IP' is an WinXP-ism; ISO
                             //                    includes it with France)
#endif
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

    // Countries using the "Greece" engine set.
    UNHANDLED_COUNTRY(C, Y)  // Cyprus
    END_UNHANDLED_COUNTRIES(G, R)

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
    UNHANDLED_COUNTRY(M, T)  // Malta
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
    default:                // Unhandled location
    END_UNHANDLED_COUNTRIES(def, ault)
  }

  std::vector<std::unique_ptr<TemplateURLData>> t_urls;
  for (size_t i = 0; i < num_engines; ++i)
    t_urls.push_back(TemplateURLDataFromPrepopulatedEngine(*engines[i]));
  return t_urls;
}

std::vector<std::unique_ptr<TemplateURLData>> GetPrepopulatedTemplateURLData(
    PrefService* prefs) {
  std::vector<std::unique_ptr<TemplateURLData>> t_urls;
  if (!prefs)
    return t_urls;

  const base::ListValue* list = prefs->GetList(prefs::kSearchProviderOverrides);
  if (!list)
    return t_urls;

  size_t num_engines = list->GetList().size();
  for (size_t i = 0; i != num_engines; ++i) {
    const base::DictionaryValue* engine;
    if (list->GetDictionary(i, &engine)) {
      auto t_url = TemplateURLDataFromOverrideDictionary(*engine);
      if (t_url)
        t_urls.push_back(std::move(t_url));
    }
  }
  return t_urls;
}

}  // namespace

// Global functions -----------------------------------------------------------

void RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) {
  country_codes::RegisterProfilePrefs(registry);
  registry->RegisterListPref(prefs::kSearchProviderOverrides);
  registry->RegisterIntegerPref(prefs::kSearchProviderOverridesVersion, -1);
}

int GetDataVersion(PrefService* prefs) {
  // Allow tests to override the local version.
  return (prefs && prefs->HasPrefPath(prefs::kSearchProviderOverridesVersion)) ?
      prefs->GetInteger(prefs::kSearchProviderOverridesVersion) :
      kCurrentDataVersion;
}

std::vector<std::unique_ptr<TemplateURLData>> GetPrepopulatedEngines(
    PrefService* prefs,
    size_t* default_search_provider_index) {
  // If there is a set of search engines in the preferences file, it overrides
  // the built-in set.
  std::vector<std::unique_ptr<TemplateURLData>> t_urls = GetPrepopulatedTemplateURLData(prefs);
  if (t_urls.empty()) 
  {
    std::vector<std::unique_ptr<TemplateURLData>>  t_urls = GetPrepopulationSetFromCountryID( country_codes::GetCountryIDFromPrefs(prefs));
  }
  if (default_search_provider_index) {
    const auto itr = std::find_if(
        t_urls.begin(), t_urls.end(),
        [](const auto& t_url) { return t_url->prepopulate_id == duckduckgo.id; });
    *default_search_provider_index =
        itr == t_urls.end() ? 0 : std::distance(t_urls.begin(), itr);
  }
  return t_urls;
}

std::unique_ptr<TemplateURLData> GetPrepopulatedEngine(PrefService* prefs,
                                                       int prepopulated_id) {
  auto engines =
      TemplateURLPrepopulateData::GetPrepopulatedEngines(prefs, nullptr);
  for (auto& engine : engines) {
    if (engine->prepopulate_id == prepopulated_id)
      return std::move(engine);
  }
  return nullptr;
}

#if defined(OS_ANDROID)

std::vector<std::unique_ptr<TemplateURLData>> GetLocalPrepopulatedEngines(
    const std::string& locale) {
  int country_id = country_codes::CountryStringToCountryID(locale);
  if (country_id == country_codes::kCountryIDUnknown) {
    LOG(ERROR) << "Unknown country code specified: " << locale;
    return std::vector<std::unique_ptr<TemplateURLData>>();
  }

  return GetPrepopulationSetFromCountryID(country_id);
}

#endif

std::vector<const PrepopulatedEngine*> GetAllPrepopulatedEngines() {
  return std::vector<const PrepopulatedEngine*>(
      &kAllEngines[0], &kAllEngines[0] + kAllEnginesLength);
}

void ClearPrepopulatedEnginesInPrefs(PrefService* prefs) {
  if (!prefs)
    return;

  prefs->ClearPref(prefs::kSearchProviderOverrides);
  prefs->ClearPref(prefs::kSearchProviderOverridesVersion);
}

std::unique_ptr<TemplateURLData> GetPrepopulatedDefaultSearch(
    PrefService* prefs) {
  size_t default_search_index;
  // This could be more efficient.  We load all URLs but keep only the default.
  std::vector<std::unique_ptr<TemplateURLData>> loaded_urls =
      GetPrepopulatedEngines(prefs, &default_search_index);

  return (default_search_index < loaded_urls.size())
             ? std::move(loaded_urls[default_search_index])
             : nullptr;
}

}  // namespace TemplateURLPrepopulateData
