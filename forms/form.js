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
      #som{
        color: red
      }
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
      <div> <title-component size="2" /> </div>
      <div> <description-component description="some other description" color="pink">
        <p>another description</p>
      </description-component> </div>
      <div> <password-field label="password"> some description <password-field/> </div>
      <div> <username-field /> </div>
      <div> <submit-button /> </div>
      <div> <reset-password /> </div>
     `;
  }
}

window.customElements.define('form-component', Form);
