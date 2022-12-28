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
    <div> <title-component title="login" /> </div>
    <div> <description-component description="authenticate"/> </div>
    <div> <username-field label="username"/> </div>
    <div> <password-field label="password"/> </div>
    <div> <submit-button label="authenticate" /> </div>
    <div> <reset-password link="#" label="reset password"/> </div>
     `
      : html`
    <div> <title-component title="create account" /> </div>
    <div> <description-component description="create an account" /> </div>
    <div> <username-field label="username" /> </div>
    <div> <password-field label="password" /> </div>
    <div> <password-field label="repeat password" /> </div>
    <div> <submit-button label="submit"/> </div>
     `;
  }

  renderTabsMenu() {
    return html`
    <div class="tab">
      <button class="tablinks" @click=${()=>{this.selectTab(1)}}>create account</button>
      <button class="tablinks" @click=${()=>{this.selectTab(2)}}>reset password</button>
    </div>
    `
  }

  selectTab(step) {
    this.step = step;
    this.requestUpdate();
  }
}

window.customElements.define('form-switch', FormSwitch);
