import { Component } from '@angular/core';
@Component({
  selector: 'demo-tab-bar', template: `<div class="component-demo"><div class="demo-header"><h1>Tab Bar</h1><p>Barra di navigazione a tab, generalmente usata per navigazione mobile.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Tab Bar</h3><div class="preview-area"><ngx-sirio-tab-bar><ngx-sirio-tab-bar-element icon="fas fa-home" [selected]="true">Home</ngx-sirio-tab-bar-element><ngx-sirio-tab-bar-element icon="fas fa-search">Cerca</ngx-sirio-tab-bar-element><ngx-sirio-tab-bar-element icon="fas fa-bell" [alert]="true">Notifiche</ngx-sirio-tab-bar-element><ngx-sirio-tab-bar-element icon="fas fa-user">Profilo</ngx-sirio-tab-bar-element></ngx-sirio-tab-bar></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs (Tab Bar Element)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>icon</code></td><td><code>string</code></td><td>Classe icona</td></tr><tr><td><code>selected</code></td><td><code>boolean</code></td><td>Elemento selezionato</td></tr><tr><td><code>alert</code></td><td><code>boolean</code></td><td>Badge di notifica</td></tr><tr><td><code>href</code></td><td><code>string</code></td><td>Link esterno</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class TabBarDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-tab-bar>
  <ngx-sirio-tab-bar-element icon="fas fa-home" [selected]="true">
    Home
  </ngx-sirio-tab-bar-element>
  <ngx-sirio-tab-bar-element icon="fas fa-search">
    Cerca
  </ngx-sirio-tab-bar-element>
  <ngx-sirio-tab-bar-element icon="fas fa-bell" [alert]="true">
    Notifiche
  </ngx-sirio-tab-bar-element>
</ngx-sirio-tab-bar>`;
}
