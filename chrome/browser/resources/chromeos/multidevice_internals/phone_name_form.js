// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'decentr://resources/cr_elements/shared_style_css.m.js';
import 'decentr://resources/cr_elements/cr_button/cr_button.m.js';
import 'decentr://resources/cr_elements/cr_input/cr_input.m.js';
import './shared_style.js';

import {html, Polymer} from 'decentr://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {MultidevicePhoneHubBrowserProxy} from './multidevice_phonehub_browser_proxy.js';

Polymer({
  is: 'phone-name-form',

  _template: html`{__html_template__}`,

  properties: {
    /** @private */
    phoneName_: {
      type: String,
      value: 'Fake phone name',
    },
  },

  /** @private {?MultidevicePhoneHubBrowserProxy}*/
  browserProxy_: null,

  /** @override */
  created() {
    this.browserProxy_ = MultidevicePhoneHubBrowserProxy.getInstance();
  },

  /** @private */
  setFakePhoneName_() {
    this.browserProxy_.setFakePhoneName(this.phoneName_);
  },
});
