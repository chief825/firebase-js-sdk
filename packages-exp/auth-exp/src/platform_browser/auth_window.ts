/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Recaptcha } from './recaptcha/recaptcha';

/**
 * A specialized window type that melds the normal window type plus the
 * various bits we need. The three different blocks that are &'d together
 * cant be defined in the same block together.
 */
export type AuthWindow = {
  // Standard window types
  [T in keyof Window]: Window[T];
} & {
  // Any known / named properties we want to add
  grecaptcha?: Recaptcha;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  ___jsl?: Record<string, any>;
  gapi?: typeof gapi;
} & {
  // A final catch-all for callbacks (which will have random names) that
  // we will stick on the window.
  [callback: string]: (...args: unknown[]) => void;
};

/**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */
export function _window(): AuthWindow {
  return (window as unknown) as AuthWindow;
}

export function _setWindowLocation(url: string): void {
  _window().location.href = url;
}
