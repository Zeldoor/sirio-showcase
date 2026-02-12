import { Component } from '@angular/core';
@Component({
    selector: 'demo-alert', template: `<div class="component-demo"><div class="demo-header"><h1>Alert</h1><p>Messaggi di avviso con diversi livelli di severità.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section" style="display:flex;flex-direction:column;gap:16px"><h3>Tipologie di alert</h3><ngx-sirio-alert type="info" labelClose="Chiudi"><ngx-sirio-alert-message>Questo è un messaggio informativo.</ngx-sirio-alert-message></ngx-sirio-alert><ngx-sirio-alert type="success" labelClose="Chiudi"><ngx-sirio-alert-message>Operazione completata con successo!</ngx-sirio-alert-message></ngx-sirio-alert><ngx-sirio-alert type="warning" labelClose="Chiudi"><ngx-sirio-alert-message>Attenzione: verifica i dati inseriti.</ngx-sirio-alert-message></ngx-sirio-alert><ngx-sirio-alert type="error" labelClose="Chiudi"><ngx-sirio-alert-message>Si è verificato un errore.</ngx-sirio-alert-message></ngx-sirio-alert></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>SirioAlertTypes</code></td><td>Tipo: info, success, warning, error (required)</td></tr><tr><td><code>labelClose</code></td><td><code>string</code></td><td>Label bottone chiudi (required)</td></tr></tbody></table><h3>Outputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>closeEvent</code></td><td><code>EventEmitter</code></td><td>Evento chiusura</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} :host ::ng-deep ngx-sirio-alert .sirio-alert{align-items:center} :host ::ng-deep ngx-sirio-alert .sirio-alert .sirio-alert-text{padding-left:12px}`]
})
export class AlertDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-alert type="info" labelClose="Chiudi">
  <ngx-sirio-alert-message>Informativo</ngx-sirio-alert-message>
</ngx-sirio-alert>

<ngx-sirio-alert type="success" labelClose="Chiudi">
  <ngx-sirio-alert-message>Successo!</ngx-sirio-alert-message>
</ngx-sirio-alert>

<ngx-sirio-alert type="warning" labelClose="Chiudi">
  <ngx-sirio-alert-message>Attenzione</ngx-sirio-alert-message>
</ngx-sirio-alert>

<ngx-sirio-alert type="error" labelClose="Chiudi">
  <ngx-sirio-alert-message>Errore</ngx-sirio-alert-message>
</ngx-sirio-alert>`;
}
