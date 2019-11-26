/**
 * @license
 * Copyright 2017 Google Inc.
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

import { FirebaseNamespace } from '@firebase/app-types';
import { _FirebaseNamespace } from '@firebase/app-types/private';
import { firebase as _firebase } from './src/firebaseNamespace';
/**
 * To avoid having to include the @types/react-native package, which breaks
 * some of our tests because of duplicate symbols, we are using require syntax
 * here
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { AsyncStorage } = require('react-native');

(_firebase as _FirebaseNamespace).INTERNAL.extendNamespace({
  INTERNAL: {
    reactNative: {
      AsyncStorage
    }
  }
});

export const firebase = _firebase as FirebaseNamespace;

// eslint-disable-next-line import/no-default-export
export default firebase;
