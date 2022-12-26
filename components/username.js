/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

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
      <label>${this.label}!</label>
      <input type="text" .value=${this.username}>
    `;
  }
}

window.customElements.define('username', Username);
