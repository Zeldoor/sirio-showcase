import { Component } from '@angular/core';
@Component({
  selector: 'demo-input-chip', template: `<div class="component-demo"><div class="demo-header"><h1>Input Chip</h1><p>Input chip per selezioni singole o multiple.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Input Chip</h3><div class="preview-area">
  <ngx-sirio-input-chip type="checkbox">Tag</ngx-sirio-input-chip>
</div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>'radio' | 'checkbox'</code></td><td>Tipo chip (required)</td></tr><tr><td><code>value</code></td><td><code>any</code></td><td>Valore</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td>Stato selezionato</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disabilitato</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class InputChipDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-input-chip type="checkbox">Tag</ngx-sirio-input-chip>

<ngx-sirio-input-chip type="radio">Opzione</ngx-sirio-input-chip>`;
}
