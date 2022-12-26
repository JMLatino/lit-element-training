/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class Submit extends LitElement {
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
    this.password = '';
  }

  render() {
    return html`
      <button style="background-color: '${this.color}'" @click=${this.onsubmit}>${this.label}</button>
      `;
  }
}

window.customElements.define('submit-button', Submit);
