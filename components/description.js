/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class Description extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      color: {type: String},
      description: {type: String},
    };
  }

  constructor() {
    super();
    this.description = 'enter description';
    this.color = 'black';
  }

  render() {
    return html`
      <p style="color:${this.color}">${this.description}</p>
      <slot></slot>
      `;
  }
}

window.customElements.define('description-component', Description);
