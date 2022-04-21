// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "build/branding_buildflags.h"
#include "chrome/common/chrome_content_client.h"

const base::FilePath::CharType ChromeContentClient::kNotPresent[] =
    FILE_PATH_LITERAL("internal-not-yet-present");

#if BUILDFLAG(ENABLE_NACL)
const base::FilePath::CharType ChromeContentClient::kNaClPluginFileName[] =
    FILE_PATH_LITERAL("internal-nacl-plugin");
#endif

const char ChromeContentClient::kPDFExtensionPluginName[] = "Chrome PDF Viewer";
const char ChromeContentClient::kPDFInternalPluginName[] = "Chrome PDF Plugin";


const base::FilePath::CharType ChromeContentClient::kPDFPluginPath[] =
    FILE_PATH_LITERAL("internal-pdf-viewer");
