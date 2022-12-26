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
    <div> <title-component /> </div>
    <div> <description-component /> </div>
    <div> <password-field /> </div>
    <div> <username-field /> </div>
    <div> <submit-button /> </div>
    <div> <reset-password @click="${this.step = 2}"/> </div>
     `
  }
}

window.customElements.define('create-account', CreateAccount);
