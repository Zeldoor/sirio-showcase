import { Component } from '@angular/core';
@Component({
  selector: 'demo-input', template: `<div class="component-demo"><div class="demo-header"><h1>Input</h1><p>Campo di testo con label, helper text e validazione.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Default</h3><div class="preview-area"><ngx-sirio-input label="Nome" placeholder="Inserisci il tuo nome"></ngx-sirio-input></div></div><div class="demo-section"><h3>Con valore</h3><div class="preview-area"><ngx-sirio-input label="Email" value="mario@email.com" textHelp="La tua email"></ngx-sirio-input></div></div><div class="demo-section"><h3>Disabilitato</h3><div class="preview-area"><ngx-sirio-input label="Campo disabilitato" value="Non modificabile" [disabledState]="true"></ngx-sirio-input></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label del campo</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>Valore</td></tr><tr><td><code>textHelp</code></td><td><code>string</code></td><td>Testo di aiuto</td></tr><tr><td><code>disabledState</code></td><td><code>boolean</code></td><td>Disabilita il campo</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class InputDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-input label="Nome" placeholder="Inserisci il tuo nome"></ngx-sirio-input>

<ngx-sirio-input label="Email" value="mario@email.com"></ngx-sirio-input>

<ngx-sirio-input label="Disabilitato" [disabledState]="true"></ngx-sirio-input>`;
}
