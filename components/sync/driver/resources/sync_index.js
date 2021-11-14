// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// <if expr="is_ios">
import 'decentr://resources/js/ios/web_ui.js';
// </if>

import './about.js';
import './data.js';
import './sync_node_browser.js';
import './user_events.js';
import './traffic_log.js';
import './search.js';
import './strings.m.js';
import './invalidations.js';
import {isWindows} from 'decentr://resources/js/cr.m.js';
import {decorate} from 'decentr://resources/js/cr/ui.m.js';
import {TabBox} from 'decentr://resources/js/cr/ui/tabs.js';
import {$} from 'decentr://resources/js/util.m.js';

// Allow platform specific CSS rules.
//
// TODO(akalin): BMM and options page does something similar, too.
// Move this to util.js.
if (isWindows) {
  document.documentElement.setAttribute('os', 'win');
}

decorate('tabbox', TabBox);
