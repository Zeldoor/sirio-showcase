import { Component } from '@angular/core';
@Component({
    selector: 'demo-badge', template: `<div class="component-demo"><div class="demo-header"><h1>Badge</h1><p>Badge indicatore numerico o di stato.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Badge</h3><div class="preview-area"><span class="sirio-badge sirio-badge--primary">5</span>&nbsp;&nbsp;<span class="sirio-badge sirio-badge--success">OK</span>&nbsp;&nbsp;<span class="sirio-badge sirio-badge--danger">!</span></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Classi CSS</h3><table class="api-table"><thead><tr><th>Classe</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>.sirio-badge</code></td><td>Badge base</td></tr><tr><td><code>.sirio-badge--primary</code></td><td>Variante primaria</td></tr><tr><td><code>.sirio-badge--success</code></td><td>Variante successo</td></tr><tr><td><code>.sirio-badge--danger</code></td><td>Variante pericolo</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class BadgeDemoComponent {
    activeTab = 'preview';
    code = `<span class="sirio-badge sirio-badge--primary">5</span>

<span class="sirio-badge sirio-badge--success">OK</span>

<span class="sirio-badge sirio-badge--danger">!</span>`;
}
