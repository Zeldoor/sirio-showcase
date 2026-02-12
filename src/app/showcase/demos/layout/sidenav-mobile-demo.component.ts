import { Component } from '@angular/core';
@Component({
    selector: 'demo-sidenav-mobile', template: `
    <div class="component-demo">
      <div class="demo-header"><h1>Sidenav Mobile</h1><p>Versione mobile della sidenav con hamburger menu.</p></div>
      <div class="demo-tabs">
        <div class="tab-nav">
          <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
          <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
          <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
        </div>
        <div class="tab-content" *ngIf="activeTab==='preview'">
          <div class="demo-section"><h3>Sidenav Mobile</h3><div class="preview-area"><p>Il componente sidenav-mobile è ottimizzato per dispositivi mobili con overlay backdrop.</p>
            <ngx-sirio-sidenav-mobile></ngx-sirio-sidenav-mobile>
          </div></div>
        </div>
        <div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>&lt;ngx-sirio-sidenav-mobile&gt;&lt;/ngx-sirio-sidenav-mobile&gt;</pre></div></div></div>
        <div class="tab-content" *ngIf="activeTab==='api'"><h3>Selector</h3><table class="api-table"><thead><tr><th>Selettore</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>ngx-sirio-sidenav-mobile</code></td><td>Sidenav mobile con hamburger</td></tr></tbody></table></div>
      </div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class SidenavMobileDemoComponent { activeTab = 'preview'; }
