/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class Title extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      size: {type: String},
      title: {type: String},
    };
  }

  constructor() {
    super();
    this.title = 'enter label';
    this.size = '1';
  }

  render() {
    return html`
      <h${this.size}>${this.title}</h${this.size}>
      `;
  }
}

window.customElements.define('title', Title);
