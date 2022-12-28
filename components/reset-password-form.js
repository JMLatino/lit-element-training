/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import './password';
import './reset-password';
import './submit';
import './title';
import './username';
import './description';

export class ResetPasswordForm extends LitElement {
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
    return html`
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
      <tabs-component @select-tab=${e=>this.selectTab(e.detail)}>
    `
  }

  selectTab(step) {
    this.step = step;
    this.requestUpdate();
  }
}

window.customElements.define('reset-password-form', ResetPasswordForm);
