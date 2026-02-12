import { Component } from '@angular/core';
@Component({
  selector: 'demo-stepper', template: `<div class="component-demo"><div class="demo-header"><h1>Stepper Progress Bar</h1><p>Barra di progresso a step per flussi multi-step.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Stepper Progress</h3><div class="preview-area"><ngx-sirio-stepper-progress-bar><ngx-sirio-stepper-progress-item label="Dati personali" [isActive]="false" [isCompleted]="true"></ngx-sirio-stepper-progress-item><ngx-sirio-stepper-progress-item label="Indirizzo" [isActive]="true" [isCompleted]="false"></ngx-sirio-stepper-progress-item><ngx-sirio-stepper-progress-item label="Pagamento" [isActive]="false" [isCompleted]="false"></ngx-sirio-stepper-progress-item><ngx-sirio-stepper-progress-item label="Conferma" [isActive]="false" [isCompleted]="false"></ngx-sirio-stepper-progress-item></ngx-sirio-stepper-progress-bar></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs (StepperProgressItem)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Testo dello step</td></tr><tr><td><code>isActive</code></td><td><code>boolean</code></td><td>Step corrente</td></tr><tr><td><code>isCompleted</code></td><td><code>boolean</code></td><td>Step completato</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class StepperDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-stepper-progress-bar>
  <ngx-sirio-stepper-progress-item label="Dati personali"
    [isActive]="false" [isCompleted]="true">
  </ngx-sirio-stepper-progress-item>
  <ngx-sirio-stepper-progress-item label="Indirizzo"
    [isActive]="true" [isCompleted]="false">
  </ngx-sirio-stepper-progress-item>
  <ngx-sirio-stepper-progress-item label="Pagamento"
    [isActive]="false" [isCompleted]="false">
  </ngx-sirio-stepper-progress-item>
</ngx-sirio-stepper-progress-bar>`;
}
