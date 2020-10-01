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

import { Endpoint, HttpMethod, _performSignInRequest } from '..';
import { IdToken, IdTokenResponse } from '../../model/id_token';
import { AuthCore } from '../../model/auth';

export interface SignInWithIdpRequest {
  requestUri: string;
  postBody: string | null;
  sessionId?: string;
  tenantId?: string;
  returnSecureToken: boolean;
  idToken?: IdToken;
  autoCreate?: boolean;
  pendingToken?: string;
}

export interface SignInWithIdpResponse extends IdTokenResponse {
  oauthAccessToken?: string;
  oauthTokenSecret?: string;
  nonce?: string;
  oauthIdToken?: string;
  pendingToken?: string;
}

export async function signInWithIdp(
  auth: AuthCore,
  request: SignInWithIdpRequest
): Promise<SignInWithIdpResponse> {
  return _performSignInRequest<SignInWithIdpRequest, SignInWithIdpResponse>(
    auth,
    HttpMethod.POST,
    Endpoint.SIGN_IN_WITH_IDP,
    request
  );
}
