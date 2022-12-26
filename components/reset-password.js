/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class ResetPassword extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {
    return {
      color: {type: String},
      label: {type: String},
    };
  }

  constructor() {
    super();
    this.label = 'enter label';
    this.link = '';
  }

  render() {
    return html`
      <a href="${this.link}" @click=${this.onsubmit}>${this.label}</a>
      `;
  }
}

window.customElements.define('reset-password', ResetPassword);
