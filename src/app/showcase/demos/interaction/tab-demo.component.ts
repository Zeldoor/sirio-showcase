import { Component } from '@angular/core';
@Component({
  selector: 'demo-tab', template: `<div class="component-demo"><div class="demo-header"><h1>Tab</h1><p>Navigazione a tab per organizzare i contenuti in sezioni.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Tab orizzontali</h3><div class="preview-area"><ngx-sirio-tab><ngx-sirio-tab-item label="Panoramica"><div style="padding:16px"><h4>Panoramica</h4><p>Contenuto della prima tab. Qui puoi inserire qualsiasi tipo di informazione.</p></div></ngx-sirio-tab-item><ngx-sirio-tab-item label="Dettagli"><div style="padding:16px"><h4>Dettagli tecnici</h4><p>Informazioni tecniche dettagliate sul componente selezionato.</p></div></ngx-sirio-tab-item><ngx-sirio-tab-item label="Documentazione"><div style="padding:16px"><h4>Documentazione</h4><p>Guida all'utilizzo del componente con esempi pratici.</p></div></ngx-sirio-tab-item></ngx-sirio-tab></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs (Tab)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>isVertical</code></td><td><code>boolean</code></td><td>Layout verticale</td></tr><tr><td><code>tabActive</code></td><td><code>number</code></td><td>Index tab attiva</td></tr></tbody></table><h3>Inputs (TabItem)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Testo della tab</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disabilita la tab</td></tr><tr><td><code>icon</code></td><td><code>string</code></td><td>Icona</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class TabDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-tab>
  <ngx-sirio-tab-item label="Panoramica">
    <p>Contenuto tab 1</p>
  </ngx-sirio-tab-item>
  <ngx-sirio-tab-item label="Dettagli">
    <p>Contenuto tab 2</p>
  </ngx-sirio-tab-item>
  <ngx-sirio-tab-item label="Documentazione">
    <p>Contenuto tab 3</p>
  </ngx-sirio-tab-item>
</ngx-sirio-tab>`;
}
