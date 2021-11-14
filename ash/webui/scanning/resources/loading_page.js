// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'decentr://resources/cr_elements/cr_button/cr_button.m.js';
import 'decentr://resources/polymer/v3_0/paper-progress/paper-progress.js';

import {I18nBehavior} from 'decentr://resources/js/i18n_behavior.m.js';
import {html, Polymer} from 'decentr://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {AppState} from './scanning_app_types.js';

/**
 * @fileoverview
 * 'loading-page' is shown while searching for available scanners.
 */
Polymer({
  is: 'loading-page',

  _template: html`{__html_template__}`,

  behaviors: [I18nBehavior],

  properties: {
    /** @type {!AppState} */
    appState: {
      type: Number,
      observer: 'onAppStateChange_',
    },

    /** @private {boolean} */
    noScannersAvailable_: {
      type: Boolean,
      value: false,
    },
  },

  /** @private */
  onAppStateChange_() {
    this.noScannersAvailable_ = this.appState === AppState.NO_SCANNERS;
  },

  /** @private */
  onRetryClick_() {
    this.fire('retry-click');
  },

  /** @private */
  onLearnMoreClick_() {
    this.fire('learn-more-click');
  },
});
