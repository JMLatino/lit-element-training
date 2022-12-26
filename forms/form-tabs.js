/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import '../components/create-account';
import '../components/reset-password-form';

export class FormTabs extends LitElement {
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
      ? html`<dcreate-account />`
      : html`<reset-password-form />`;
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

window.customElements.define('form-tabs', FormTabs);
