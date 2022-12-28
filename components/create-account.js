/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import './password';
import './reset-password';
import './submit';
import './title';
import './username';
import './description';

export class CreateAccount extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      tabs: { type: Array },
    };
  }

  constructor() {
    super();
    this.label = 'enter label';
    this.username = '';
  }

  render() {
    return html`
    <div> <title-component title="login" /> </div>
    <div> <description-component description="authenticate"/> </div>
    <div> <username-field label="username"/> </div>
    <div> <password-field label="password"/> </div>
    <div> <submit-button label="authenticate" /> </div>
    <div> <reset-password link="#" label="reset password"/> </div>
     `
  }
}

window.customElements.define('create-account', CreateAccount);
