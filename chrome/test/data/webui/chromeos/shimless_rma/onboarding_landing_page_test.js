// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {PromiseResolver} from 'decentr://resources/js/promise_resolver.m.js';
import {fakeStates} from 'decentr://shimless-rma/fake_data.js';
import {FakeShimlessRmaService} from 'decentr://shimless-rma/fake_shimless_rma_service.js';
import {setShimlessRmaServiceForTesting} from 'decentr://shimless-rma/mojo_interface_provider.js';
import {OnboardingLandingPage} from 'decentr://shimless-rma/onboarding_landing_page.js';
import {RmaState} from 'decentr://shimless-rma/shimless_rma_types.js';

import {assertDeepEquals, assertEquals, assertFalse, assertTrue} from '../../chai_assert.js';
import {flushTasks} from '../../test_util.js';


export function onboardingLandingPageTest() {
  /** @type {?OnboardingLandingPage} */
  let component = null;

  /** @type {?FakeShimlessRmaService} */
  let service = null;

  suiteSetup(() => {
    service = new FakeShimlessRmaService();
    setShimlessRmaServiceForTesting(service);
  });

  setup(() => {
    document.body.innerHTML = '';
  });

  teardown(() => {
    component.remove();
    component = null;
    service.reset();
  });

  /**
   * @return {!Promise}
   */
  function initializeLandingPage() {
    assertFalse(!!component);

    component = /** @type {!OnboardingLandingPage} */ (
        document.createElement('onboarding-landing-page'));
    assertTrue(!!component);
    document.body.appendChild(component);

    return flushTasks();
  }

  test('ComponentRenders', async () => {
    await initializeLandingPage();
    assertTrue(!!component);

    const basePage = component.shadowRoot.querySelector('base-page');
    assertTrue(!!basePage);
  });

  test('OnBoardingPageOnNextCallsBeginFinalization', async () => {
    const resolver = new PromiseResolver();
    await initializeLandingPage();
    let callCounter = 0;
    service.beginFinalization = () => {
      callCounter++;
      return resolver.promise;
    };

    let expectedResult = {foo: 'bar'};
    let savedResult;
    component.onNextButtonClick().then((result) => savedResult = result);
    // Resolve to a distinct result to confirm it was not modified.
    resolver.resolve(expectedResult);
    await flushTasks();

    assertEquals(callCounter, 1);
    assertDeepEquals(savedResult, expectedResult);
  });
}
