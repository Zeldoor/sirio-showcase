import { Component } from '@angular/core';
@Component({
  selector: 'demo-toggle', template: `<div class="component-demo"><div class="demo-header"><h1>Toggle</h1><p>Toggle switch on/off.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Toggle</h3><div class="preview-area" style="flex-direction:column;gap:12px;">
             <ngx-sirio-toggle label="Notifiche"></ngx-sirio-toggle>
             <ngx-sirio-toggle label="Attivo" [checked]="true"></ngx-sirio-toggle>
             <ngx-sirio-toggle label="Disabilitato" [disabled]="true"></ngx-sirio-toggle>
           </div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>&lt;ngx-sirio-toggle label="Notifiche"&gt;&lt;/ngx-sirio-toggle&gt;
&lt;ngx-sirio-toggle label="Attivo" [checked]="true"&gt;&lt;/ngx-sirio-toggle&gt;</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Testo label</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td>Stato on/off</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disabilitato</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class ToggleDemoComponent { activeTab = 'preview'; }
