import { Component } from '@angular/core';
@Component({
  selector: 'demo-breadcrumb', template: `<div class="component-demo"><div class="demo-header"><h1>Breadcrumb</h1><p>Navigazione a briciole di pane per indicare la posizione corrente.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Breadcrumb</h3><div class="preview-area"><ngx-sirio-breadcrumb><ngx-sirio-breadcrumb-item name="Home" href="/"></ngx-sirio-breadcrumb-item><ngx-sirio-breadcrumb-item name="Componenti" href="/showcase"></ngx-sirio-breadcrumb-item><ngx-sirio-breadcrumb-item name="Breadcrumb" [isActive]="true"></ngx-sirio-breadcrumb-item></ngx-sirio-breadcrumb></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs (BreadcrumbItem)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>Testo della voce</td></tr><tr><td><code>href</code></td><td><code>string</code></td><td>URL di navigazione</td></tr><tr><td><code>isActive</code></td><td><code>boolean</code></td><td>Voce attiva (corrente)</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class BreadcrumbDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-breadcrumb>
  <ngx-sirio-breadcrumb-item name="Home" href="/"></ngx-sirio-breadcrumb-item>
  <ngx-sirio-breadcrumb-item name="Componenti" href="/showcase"></ngx-sirio-breadcrumb-item>
  <ngx-sirio-breadcrumb-item name="Breadcrumb" [isActive]="true"></ngx-sirio-breadcrumb-item>
</ngx-sirio-breadcrumb>`;
}
