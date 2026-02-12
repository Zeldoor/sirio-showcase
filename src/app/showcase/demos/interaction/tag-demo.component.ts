import { Component } from '@angular/core';
@Component({
    selector: 'demo-tag', template: `<div class="component-demo"><div class="demo-header"><h1>Tag</h1><p>Etichette colorate per stato o categorizzazione.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Varianti di tag</h3><div class="preview-area" style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><ngx-sirio-tag text="Successo" type="success"></ngx-sirio-tag><ngx-sirio-tag text="Informazione" type="info"></ngx-sirio-tag><ngx-sirio-tag text="Attenzione" type="warning"></ngx-sirio-tag><ngx-sirio-tag text="Errore" type="danger"></ngx-sirio-tag></div></div><div class="demo-section"><h3>Tag con numeri</h3><div class="preview-area" style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><ngx-sirio-tag [text]="42" type="info"></ngx-sirio-tag><ngx-sirio-tag [text]="7" type="danger"></ngx-sirio-tag></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>text</code></td><td><code>string | number</code></td><td>Testo del tag</td></tr><tr><td><code>type</code></td><td><code>SirioFeedbackTypes</code></td><td>Tipo: success, info, warning, danger</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class TagDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-tag text="Successo" type="success"></ngx-sirio-tag>
<ngx-sirio-tag text="Informazione" type="info"></ngx-sirio-tag>
<ngx-sirio-tag text="Attenzione" type="warning"></ngx-sirio-tag>
<ngx-sirio-tag text="Errore" type="danger"></ngx-sirio-tag>

<!-- Con numeri -->
<ngx-sirio-tag [text]="42" type="info"></ngx-sirio-tag>`;
}
