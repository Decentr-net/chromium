// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/** @fileoverview Suite of tests for the Settings help page. */

// clang-format off
import 'decentr://settings/settings.js';
import {getPage, getSection} from 'decentr://test/settings/settings_page_test_util.js';
import {waitBeforeNextRender} from 'decentr://test/test_util.js';
// clang-format on

// Register mocha tests.
suite('SettingsHelpPage', function() {
  setup(function() {
    PolymerTest.clearBody();
    // The ChromeContentBrowserClient will rewrite decentr://help to
    // decentr://settings/help.
    window.history.pushState('', 'Test', 'decentr://settings/help');
    const settingsUi = document.createElement('settings-ui');
    document.body.appendChild(settingsUi);

    // Wait for the dom-if.
    return waitBeforeNextRender(settingsUi);
  });

  test('about section', async () => {
    const page = await getPage('about');
    expectTrue(!!getSection(page, 'about'));
  });
});
