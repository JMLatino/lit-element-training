/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import '../components/password';
import '../components/reset-password';
import '../components/submit';
import '../components/title';
import '../components/username';
import '../components/description';

export class FormSwitch extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      tabs: { type: Array },
    };
  }

  constructor() {
    super();
    this.label = 'enter label';
    this.username = '';
  }

  render() {
    return html`
      <div> ${this.renderTabsMenu()} </div>
      <div> ${this.renderContent()} </div>
     `;
  }

  renderContent() {
    return this.step === 1
      ? html`
    <div> <title-component /> </div>
    <div> <description-component /> </div>
    <div> <password-field /> </div>
    <div> <username-field /> </div>
    <div> <submit-button /> </div>
    <div> <reset-password @click="${this.step = 2}"/> </div>
     `
      : html`
    <div> <title-component /> </div>
    <div> <description-component /> </div>
    <div> <username-field /> </div>
    <div> <password-field /> </div>
    <div> <password-field /> </div>
    <div> <submit-button /> </div>
     `;
  }

  renderTabsMenu() {
    return html`
    <div class="tab">
      <button class="tablinks" @click=${this.selectTab(1)}>create account</button>
      <button class="tablinks" @click=${this.selectTab(2)}>reset password</button>
    </div>
    `
  }

  selectTab(step) {
    this.step = step;
    this.requestUpdate();
  }
}

window.customElements.define('form-switch', FormSwitch);
