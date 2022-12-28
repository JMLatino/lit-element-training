/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class Password extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {
    return {
      password: {type: String},
      label: {type: String},
    };
  }

  constructor() {
    super();
    this.label = 'enter label';
    this.password = '';
  }

  render() {
    return html`
      <label>${this.label}</label>
      <input type="password" .value=${this.password}>
      <slot />
    `;
  }
}

window.customElements.define('password-field', Password);
