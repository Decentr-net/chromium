// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/passwords.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/passwords.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace passwords {
//
// Functions
//

namespace Get {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::ConstListView& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& key_value = args[0];
    {
      auto* temp = key_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->key = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


Results::Data::Data()
 {}

Results::Data::~Data() = default;
Results::Data::Data(Data&& rhs) = default;
Results::Data& Results::Data::operator=(Data&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::Data::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("key", std::make_unique<base::Value>(this->key));

  to_value_result->SetWithoutPathExpansion("value", std::make_unique<base::Value>(this->value));


  return to_value_result;
}


std::vector<base::Value> Results::Create(const Data& data) {
  std::vector<base::Value> create_results;
  create_results.reserve(1);
  create_results.push_back(base::Value::FromUniquePtrValue((data).ToValue()));

  return create_results;
}
}  // namespace Get

namespace Add {

Params::Data::Data()
 {}

Params::Data::~Data() = default;
Params::Data::Data(Data&& rhs) = default;
Params::Data& Params::Data::operator=(Data&& rhs) = default;
// static
bool Params::Data::Populate(
    const base::Value& value, Data* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* url_value = dict->FindKey("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->url = *temp;
  }

  const base::Value* password_value = dict->FindKey("password");
  if (!password_value) {
    return false;
  }
  {
    auto* temp = (*password_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->password = *temp;
  }

  const base::Value* username_value = dict->FindKey("username");
  if (!username_value) {
    return false;
  }
  {
    auto* temp = (*username_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->username = *temp;
  }

  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::ConstListView& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_value = args[0];
    {
      if (!data_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Data::Populate(data_value, &params->data)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


std::vector<base::Value> Results::Create(const std::string& error) {
  std::vector<base::Value> create_results;
  create_results.reserve(1);
  create_results.push_back(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(error)));

  return create_results;
}
}  // namespace Add

//
// Events
//

namespace OnChanged {

const char kEventName[] = "passwords.onChanged";

std::vector<base::Value> Create(const std::string& key) {
  std::vector<base::Value> create_results;
  create_results.reserve(1);
  create_results.push_back(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(key)));

  return create_results;
}

}  // namespace OnChanged

}  // namespace passwords
}  // namespace api
}  // namespace extensions

