/**
 * @license
 * Copyright 2019 Google LLC
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

export const DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
export const DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';

export const DEFAULT_VAPID_KEY =
  'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';

export const ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';

/** Key of FCM Payload in Notification's data field. */
export const FCM_MSG = 'FCM_MSG';

export const CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
export const CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
export const CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
/** Set to '1' if Analytics is enabled for the campaign */
export const CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
export const TAG = 'FirebaseMessaging: ';
