// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format off
// #import 'decentr://os-settings/chromeos/os_settings.js';
// #import 'decentr://os-settings/strings.m.js';

// #import {flush, Polymer} from 'decentr://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
// #import {assertTrue} from '../../../chai_assert.js';
// #import {eventToPromise} from 'decentr://test/test_util.m.js';
// #import {FakeBluetoothConfig} from 'decentr://test/cr_components/chromeos/bluetooth/fake_bluetooth_config.js';
// #import {setBluetoothConfigForTesting} from 'decentr://resources/cr_components/chromeos/bluetooth/cros_bluetooth_config.js';
// clang-format on

suite('OsBluetoothPairingDialogTest', function() {
  /** @type {?SettingsBluetoothPairingDialogElement} */
  let bluetoothPairingDialog;

  /** @type {!FakeBluetoothConfig} */
  let bluetoothConfig;

  /** @type {!chromeos.bluetoothConfig.mojom} */
  let mojom;

  setup(function() {
    mojom = chromeos.bluetoothConfig.mojom;

    bluetoothConfig = new FakeBluetoothConfig();
    setBluetoothConfigForTesting(bluetoothConfig);

    bluetoothPairingDialog =
        document.createElement('os-settings-bluetooth-pairing-dialog');
    document.body.appendChild(bluetoothPairingDialog);
    Polymer.dom.flush();
  });

  test('Finished event is fired on close', async function() {
    const pairingDialog =
        bluetoothPairingDialog.shadowRoot.querySelector('bluetooth-pairing-ui');
    assertTrue(!!pairingDialog);

    const closeBluetoothPairingUiPromise =
        test_util.eventToPromise('close', bluetoothPairingDialog);

    pairingDialog.dispatchEvent(new CustomEvent('finished'));

    await closeBluetoothPairingUiPromise;
  });
});
