import { Component } from '@angular/core';
import { SirioStepperProgressStatus } from 'ngx-sirio-lib';

export enum StepStatus {
  ACTIVE = 'active',
  SUCCESS = 'success',
  INACTIVE = 'inactive',
  WARNING = 'warning',
  ERROR = 'error'
}

@Component({
  selector: 'demo-stepper',
  template: `<div class="component-demo">
    <div class="demo-header">
      <h1>Stepper Progress Bar</h1>
      <p>Barra di progresso a step per flussi multi-step.</p>
    </div>
    <div class="demo-tabs">
      <div class="tab-nav">
        <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
        <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
        <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
      </div>
      <div class="tab-content" *ngIf="activeTab==='preview'">
        <div class="demo-section">
          <h3>Stepper Progress</h3>
          <div class="preview-area" style="width:100%">
            <ngx-sirio-stepper-progress-bar [hasDropdown]="false" style="display:block;width:100%">
              <ngx-sirio-stepper-progress-item
                *ngFor="let step of steps; let i = index"
                [label]="step.label"
                [status]="getStatus(i)">
              </ngx-sirio-stepper-progress-item>
            </ngx-sirio-stepper-progress-bar>
            <div style="display:flex;gap:12px;margin-top:16px;justify-content:center;align-items:center;width:100%">
              <ngx-sirio-button color="secondary" (clickEvent)="prev()" [disabled]="currentStep === 0"><i class="fa-solid fa-angle-left"></i></ngx-sirio-button>
              <ngx-sirio-button color="primary" (clickEvent)="next()" [disabled]="currentStep === steps.length - 1"><i class="fa-solid fa-angle-right"></i></ngx-sirio-button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content" *ngIf="activeTab==='code'">
        <div class="demo-section">
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang">HTML</span>
            </div>
            <pre>{{ htmlCode }}</pre>
          </div>
          <div class="code-block" style="margin-top:16px">
            <div class="code-header">
              <span class="code-lang">TypeScript</span>
            </div>
            <pre>{{ tsCode }}</pre>
          </div>
        </div>
      </div>
      <div class="tab-content" *ngIf="activeTab==='api'">
        <h3>Enum: StepStatus</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Valore</th>
              <th>Stringa</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>StepStatus.ACTIVE</code></td>
              <td><code>'active'</code></td>
              <td>Step corrente</td>
            </tr>
            <tr>
              <td><code>StepStatus.SUCCESS</code></td>
              <td><code>'success'</code></td>
              <td>Step completato</td>
            </tr>
            <tr>
              <td><code>StepStatus.INACTIVE</code></td>
              <td><code>'inactive'</code></td>
              <td>Step non ancora raggiunto</td>
            </tr>
            <tr>
              <td><code>StepStatus.WARNING</code></td>
              <td><code>'warning'</code></td>
              <td>Step con avviso</td>
            </tr>
            <tr>
              <td><code>StepStatus.ERROR</code></td>
              <td><code>'error'</code></td>
              <td>Step con errore</td>
            </tr>
          </tbody>
        </table>
        <h3 style="margin-top:24px">Inputs (StepperProgressBar)</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ariaLabel</code></td>
              <td><code>string</code></td>
              <td>Aria-label del componente</td>
            </tr>
            <tr>
              <td><code>hasDropdown</code></td>
              <td><code>boolean</code></td>
              <td>Mostra il dropdown per la navigazione</td>
            </tr>
            <tr>
              <td><code>dropDownText</code></td>
              <td><code>string</code></td>
              <td>Testo del bottone dropdown</td>
            </tr>
            <tr>
              <td><code>dropDownLabel</code></td>
              <td><code>string</code></td>
              <td>Aria-label del bottone dropdown</td>
            </tr>
          </tbody>
        </table>
        <h3 style="margin-top:24px">Outputs (StepperProgressBar)</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>eventClick</code></td>
              <td><code>EventEmitter</code></td>
              <td>Evento emesso al click su uno step</td>
            </tr>
          </tbody>
        </table>
        <h3 style="margin-top:24px">Inputs (StepperProgressItem)</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>label</code></td>
              <td><code>string</code></td>
              <td>Testo dello step</td>
            </tr>
            <tr>
              <td><code>status</code></td>
              <td><code>StepStatus</code></td>
              <td>Stato dello step (enum)</td>
            </tr>
            <tr>
              <td><code>hasNavigation</code></td>
              <td><code>boolean</code></td>
              <td>Abilita la navigazione con routerLink</td>
            </tr>
            <tr>
              <td><code>screenReaderText</code></td>
              <td><code>string</code></td>
              <td>Testo per screen reader</td>
            </tr>
          </tbody>
        </table>
        <h3 style="margin-top:24px">Outputs (StepperProgressItem)</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>onClick</code></td>
              <td><code>EventEmitter</code></td>
              <td>Evento emesso al click sullo step</td>
            </tr>
          </tbody>
        </table>
        <h3 style="margin-top:24px">Metodi del Component</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Metodo</th>
              <th>Return</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>getStatus(index)</code></td>
              <td><code>StepStatus</code></td>
              <td>Restituisce lo stato dello step in base all'indice</td>
            </tr>
            <tr>
              <td><code>next()</code></td>
              <td><code>void</code></td>
              <td>Avanza allo step successivo</td>
            </tr>
            <tr>
              <td><code>prev()</code></td>
              <td><code>void</code></td>
              <td>Torna allo step precedente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class StepperDemoComponent {
  activeTab = 'preview';
  currentStep = 0;

  steps = [
    { label: 'Dati personali' },
    { label: 'Indirizzo' },
    { label: 'Pagamento' },
    { label: 'Riepilogo' },
    { label: 'Conferma' },
    { label: 'Completato' }
  ];

  getStatus(index: number): SirioStepperProgressStatus {
    if (index < this.currentStep) return 'success';
    if (index === this.currentStep) return 'active';
    return 'inactive';
  }

  next(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prev(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  htmlCode = `<ngx-sirio-stepper-progress-bar [hasDropdown]="false">
  <ngx-sirio-stepper-progress-item
    *ngFor="let step of steps; let i = index"
    [label]="step.label"
    [status]="getStatus(i)">
  </ngx-sirio-stepper-progress-item>
</ngx-sirio-stepper-progress-bar>

<ngx-sirio-button color="secondary"
  (clickEvent)="prev()" [disabled]="currentStep === 0">
  <i class="fa-solid fa-angle-left"></i>
</ngx-sirio-button>

<ngx-sirio-button color="primary"
  (clickEvent)="next()"
  [disabled]="currentStep === steps.length - 1">
  <i class="fa-solid fa-angle-right"></i>
</ngx-sirio-button>`;

  tsCode = `import { SirioStepperProgressStatus } from 'ngx-sirio-lib';

export enum StepStatus {
  ACTIVE = 'active',
  SUCCESS = 'success',
  INACTIVE = 'inactive',
  WARNING = 'warning',
  ERROR = 'error'
}

// Valori possibili per lo status:
// 'active' | 'success' | 'inactive' | 'warning' | 'error'

currentStep = 0;

steps = [
  { label: 'Dati personali' },
  { label: 'Indirizzo' },
  { label: 'Pagamento' },
  { label: 'Riepilogo' },
  { label: 'Conferma' },
  { label: 'Completato' }
];

getStatus(index: number): SirioStepperProgressStatus {
  if (index < this.currentStep) return 'success';
  if (index === this.currentStep) return 'active';
  return 'inactive';
}

next(): void {
  if (this.currentStep < this.steps.length - 1) {
    this.currentStep++;
  }
}

prev(): void {
  if (this.currentStep > 0) {
    this.currentStep--;
  }
}`;
}
