// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/passwords.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_PASSWORDS_H__
#define EXTENSIONS_COMMON_API_PASSWORDS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace passwords {

//
// Functions
//

namespace Get {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::ConstListView& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  // key
  std::string key;


 private:
  Params();
};

namespace Results {

struct Data {
  Data();
  ~Data();
  Data(const Data&) = delete;
  Data& operator=(const Data&) = delete;
  Data(Data&& rhs);
  Data& operator=(Data&& rhs);

  // Returns a new base::DictionaryValue representing the serialized form of
  // this Data object.
  std::unique_ptr<base::DictionaryValue> ToValue() const;

  std::string key;

  std::string value;

};


std::vector<base::Value> Create(const Data& data);
}  // namespace Results

}  // namespace Get

namespace Add {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::ConstListView& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  struct Data {
    Data();
    ~Data();
    Data(const Data&) = delete;
    Data& operator=(const Data&) = delete;
    Data(Data&& rhs);
    Data& operator=(Data&& rhs);

    // Populates a Data object from a base::Value. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value& value, Data* out);

    std::string url;

    std::string password;

    std::string username;

  };


  Data data;


 private:
  Params();
};

namespace Results {

std::vector<base::Value> Create(const std::string& error);
}  // namespace Results

}  // namespace Add

//
// Events
//

namespace OnChanged {

extern const char kEventName[];  // "passwords.onChanged"

// Changed key
std::vector<base::Value> Create(const std::string& key);
}  // namespace OnChanged

}  // namespace passwords
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PASSWORDS_H__
