// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/install_static/install_modes.h"

#include "chrome/install_static/buildflags.h"

namespace install_static {

namespace {

std::wstring GetClientsKeyPathForApp(const wchar_t* app_guid) {
  return std::wstring(L"Software\\Decentr\\Update\\Clients\\").append(app_guid);
}

std::wstring GetClientStateKeyPathForApp(const wchar_t* app_guid) {
  return std::wstring(L"Software\\Decentr\\Update\\ClientState\\")
      .append(app_guid);
}

std::wstring GetClientStateMediumKeyPathForApp(const wchar_t* app_guid) {
  return std::wstring(L"Software\\Decentr\\Update\\ClientStateMedium\\")
      .append(app_guid);
}

}  // namespace

std::wstring GetClientsKeyPath(const wchar_t* app_guid) {
  return GetClientsKeyPathForApp(app_guid);
}

std::wstring GetClientStateKeyPath(const wchar_t* app_guid) {
  return GetClientStateKeyPathForApp(app_guid);
}

std::wstring GetClientStateMediumKeyPath(const wchar_t* app_guid) {
  return GetClientStateMediumKeyPathForApp(app_guid);
}

}  // namespace install_static
