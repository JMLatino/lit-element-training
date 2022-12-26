/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import '../components/password';
import '../components/reset-password';
import '../components/submit';
import '../components/title';
import '../components/username';
import '../components/description';

export class Form extends LitElement {
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
    <div> <title-component /> </div>
    <div> <description-component /> </div>
    <div> <password-field /> </div>
    <div> <username-field /> </div>
    <div> <submit-button /> </div>
    <div> <reset-password /> </div>
     `;
  }
}

window.customElements.define('form-component', Form);
