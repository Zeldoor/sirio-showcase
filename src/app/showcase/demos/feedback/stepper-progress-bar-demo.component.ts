import { Component } from '@angular/core';
@Component({
  selector: 'demo-stepper-progress-bar', template: `<div class="component-demo"><div class="demo-header"><h1>Stepper Progress Bar</h1><p>Barra di progresso a step discreti.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Stepper Progress Bar</h3><div class="preview-area" style="display:block;width:100%">
  <ngx-sirio-stepper-progress-bar [hasDropdown]="false" style="display:block;width:100%">
    <ngx-sirio-stepper-progress-item label="Dati" status="success"></ngx-sirio-stepper-progress-item>
    <ngx-sirio-stepper-progress-item label="Indirizzo" status="active"></ngx-sirio-stepper-progress-item>
    <ngx-sirio-stepper-progress-item label="Conferma" status="inactive"></ngx-sirio-stepper-progress-item>
  </ngx-sirio-stepper-progress-bar>
</div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs (StepperProgressBar)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td>Label accessibilità</td></tr><tr><td><code>hasDropdown</code></td><td><code>boolean</code></td><td>Abilita dropdown su mobile</td></tr><tr><td><code>dropDownLabel</code></td><td><code>string</code></td><td>Label del dropdown</td></tr><tr><td><code>dropDownText</code></td><td><code>string</code></td><td>Testo del dropdown</td></tr></tbody></table><h3>Inputs (StepperProgressItem)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Testo dello step</td></tr><tr><td><code>status</code></td><td><code>'active' | 'success' | 'inactive' | 'warning' | 'error'</code></td><td>Stato dello step</td></tr><tr><td><code>hasNavigation</code></td><td><code>boolean</code></td><td>Abilita navigazione</td></tr><tr><td><code>screenReaderText</code></td><td><code>string</code></td><td>Testo per screen reader</td></tr></tbody></table><h3>Outputs (StepperProgressBar)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>eventClick</code></td><td><code>EventEmitter</code></td><td>Evento emesso al click su un item</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class StepperProgressBarDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-stepper-progress-bar [hasDropdown]="false">
  <ngx-sirio-stepper-progress-item label="Dati" status="success">
  </ngx-sirio-stepper-progress-item>
  <ngx-sirio-stepper-progress-item label="Indirizzo" status="active">
  </ngx-sirio-stepper-progress-item>
  <ngx-sirio-stepper-progress-item label="Conferma" status="inactive">
  </ngx-sirio-stepper-progress-item>
</ngx-sirio-stepper-progress-bar>`;
}
