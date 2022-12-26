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
    this.size = 1;
  }

  render() {
    return html`
      ${this.renderTitle()}
      `;
  }

  renderTitle(){
    switch(this.size){
      case 1:
        return html`
        <h1>${this.title}</h1>
        `;
      case 2:
        return html`
        <h2>${this.title}</h2>
        `;
      case 3:
        return html`
        <h3>${this.title}</h3>
        `;

    }
  }
}

window.customElements.define('title-component', Title);
