/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

export class Tabs extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      tabs: {type: Array},
    };
  }

  constructor() {
    super();
    this.tabs = [
      {
        label: 'create account',
        id: 1
      },
      {
        label: 'reset password',
        id: 2
      },
    ]
  }

  render() {
    return html`
    <div class="tab">
      ${this.tabs.map(tab =>{
        return html`<button class="tablinks" @click=${()=>{this.selectTab(tab.id)}}>${tab.label}</button>`
      })}
    </div>
    `;
  }

  selectTab(id){
    this.dispatchEvent(new CustomEvent('select-tab', {detail:{id}}));
  }
}

window.customElements.define('tabs-menu', Tabs);
