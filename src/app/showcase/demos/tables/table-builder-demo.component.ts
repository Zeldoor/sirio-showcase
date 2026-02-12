import { Component } from '@angular/core';
@Component({
    selector: 'demo-table-builder', template: `<div class="component-demo"><div class="demo-header"><h1>Table Builder</h1><p>Tabella avanzata con sorting, paginazione e selezione righe.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Table Builder</h3><p>Il Table Builder utilizza SirioDataSource, directives per celle e righe, e supporta molteplici modalità di visualizzazione.</p><div class="preview-area" style="display:block;"><p style="color:#5a6270;font-size:0.9rem;">Il Table Builder richiede una configurazione avanzata con SirioDataSource. Vedere il codice per l'implementazione completa.</p></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">TypeScript</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Sub-componenti e Directives</h3><table class="api-table"><thead><tr><th>Selettore</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>ngx-sirio-table-builder</code></td><td>Container tabella avanzata</td></tr><tr><td><code>[sirioCell]</code></td><td>Directive per cella personalizzata</td></tr><tr><td><code>[sirioRow]</code></td><td>Directive per riga personalizzata</td></tr><tr><td><code>sirio-sort-header</code></td><td>Header con sorting</td></tr><tr><td><code>ngx-sirio-table-container</code></td><td>Container scrollabile</td></tr><tr><td><code>ngx-sirio-table-no-data</code></td><td>Stato vuoto</td></tr></tbody></table><h3>TableModeType</h3><table class="api-table"><thead><tr><th>Valore</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>sirio-table-default</code></td><td>Default</td></tr><tr><td><code>sirio-table-medium</code></td><td>Medium</td></tr><tr><td><code>sirio-table-small</code></td><td>Small</td></tr><tr><td><code>sirio-table-extra-small</code></td><td>Extra small</td></tr><tr><td><code>sirio-table-mobile-card</code></td><td>Mobile card</td></tr><tr><td><code>sirio-fixed-column</code></td><td>Colonna fissa</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class TableBuilderDemoComponent {
    activeTab = 'preview';
    code = `import { SirioDataSource } from 'ngx-sirio-lib';

// Creare un datasource
const dataSource = new SirioDataSource();
dataSource.data = [...];

<ngx-sirio-table-builder [dataSource]="dataSource" [columns]="columns">
</ngx-sirio-table-builder>`;
}
