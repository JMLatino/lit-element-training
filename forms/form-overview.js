/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import '../forms/form';
import '../forms/form-switch';
import '../forms/form-tabs';


export class FormOverview extends LitElement {
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
    this.menu = [
     'basic', 'switch', 'tabs'
    ];
    this.username = '';
  }

  render() {
    return html`
      <h1>Select your example</h1>
      <div style="margin:20px">${this.renderSelectMenu()}</div>
      <div style="background-color:#C9C9C9; padding:20px">${this.renderContent()}</div>
    `
  }

  renderSelectMenu(){
    return html`
      ${this.menu.map(
        option => html`<button @click="${()=> this.setSelection(option)}" >${option}</button>`
      )}
    `
  }

  setSelection(option){
    this.form = option;
    this.requestUpdate();
  }

  renderContent(){
    switch(this.form){
      case 'basic':
        return html`<form-component>`
      case 'switch':
        return html`<form-switch>`
        case 'tabs':
          return html`<form-tabs>`
    }
  }
}

window.customElements.define('form-overview', FormOverview);
