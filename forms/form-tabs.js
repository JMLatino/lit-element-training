/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import '../components/create-account';
import '../components/reset-password-form';
import '../components/tabs';

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
  }

  render() {
    return html`
      <div> ${this.renderTabsMenu()} </div>
      <div> ${this.renderContent()} </div>
     `;
  }

  renderContent() {
    return this.step === 1
      ? html`<create-account/>`
      : html`<reset-password-form />`;
  }

  renderTabsMenu() {
    return html`
      <tabs-menu @select-tab=${e=>this.selectTab(e.detail.id)} />
    `
  }

  selectTab(step) {
    this.step = step;
    this.requestUpdate();
  }
}

window.customElements.define('form-tabs', FormTabs);
