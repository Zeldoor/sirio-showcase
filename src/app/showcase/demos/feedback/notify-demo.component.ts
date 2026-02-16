import { Component } from '@angular/core';
@Component({
  selector: 'demo-notify', template: `<div class="component-demo"><div class="demo-header"><h1>Notify</h1><p>Notifica globale con messaggi e azioni.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Notify</h3><div class="preview-area" style="flex-direction:column;">
  <ngx-sirio-notify type="success" title="Completato" message="Operazione avvenuta con successo."></ngx-sirio-notify>
  <ngx-sirio-notify type="info" title="Informazione" message="Nuova comunicazione disponibile."></ngx-sirio-notify>
</div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>FeedbackTypes</code></td><td>Tipo notifica</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>Titolo</td></tr><tr><td><code>message</code></td><td><code>string</code></td><td>Messaggio</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class NotifyDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-notify type="success" title="Completato"
  message="Operazione avvenuta con successo.">
</ngx-sirio-notify>

<ngx-sirio-notify type="info" title="Informazione"
  message="Nuova comunicazione disponibile.">
</ngx-sirio-notify>`;
}
