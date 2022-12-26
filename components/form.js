/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import './password';
import './reset-password';
import './submit';
import './title';
import './username';

export class Username extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      username: {type: String},
      label: {type: String},
    };
  }

  constructor() {
    super();
    this.label = 'enter label';
    this.username = '';
  }

  render() {
    return html`
    <div> <password-field /> </div>
    <div> <reset-password /> </div>
    <div> <title-component /> </div>
    <div> <username-field /> </div>
    <div> <submit-button /> </div>
     `;
  }
}

window.customElements.define('form-component', Username);
