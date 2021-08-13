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

import { ProviderId, SignInMethod } from '../../model/enums';
import { AuthProvider } from '../../model/public_types';

import { ActionCodeURL } from '../action_code_url';
import { EmailAuthCredential } from '../credentials/email';
import { AuthErrorCode } from '../errors';
import { _assert } from '../util/assert';

/**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */
export class EmailAuthProvider implements AuthProvider {
  /**
   * Always set to {@link ProviderId}.PASSWORD, even for email link.
   */
  static readonly PROVIDER_ID: 'password' = ProviderId.PASSWORD;
  /**
   * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
   */
  static readonly EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' =
    SignInMethod.EMAIL_PASSWORD;
  /**
   * Always set to {@link SignInMethod}.EMAIL_LINK.
   */
  static readonly EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' =
    SignInMethod.EMAIL_LINK;
  /**
   * Always set to {@link ProviderId}.PASSWORD, even for email link.
   */
  readonly providerId = EmailAuthProvider.PROVIDER_ID;

  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(email: string, password: string): EmailAuthCredential {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }

  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The Auth instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(
    email: string,
    emailLink: string
  ): EmailAuthCredential {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, AuthErrorCode.ARGUMENT_ERROR);

    return EmailAuthCredential._fromEmailAndCode(
      email,
      actionCodeUrl.code,
      actionCodeUrl.tenantId
    );
  }
}
