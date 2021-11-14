// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'decentr://settings/lazy_load.js';

import {flush} from 'decentr://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import {Router, routes} from 'decentr://settings/settings.js';

const ui = document.createElement('settings-ui');
document.body.appendChild(ui);
Router.getInstance().navigateTo(routes.ACCESSIBILITY);
flush();
document.dispatchEvent(new CustomEvent('a11y-setup-complete'));
