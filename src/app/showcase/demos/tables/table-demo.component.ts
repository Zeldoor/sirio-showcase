import { Component } from '@angular/core';
@Component({
  selector: 'demo-table', template: `<div class="component-demo"><div class="demo-header"><h1>Table</h1><p>Tabella con dati, colonne e ordinamento.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Tabella</h3><div class="preview-area" style="display:block;overflow:auto;"><ngx-sirio-table [data]="tableData" [columns]="tableColumns"></ngx-sirio-table></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">TypeScript</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>data</code></td><td><code>TableData[]</code></td><td>Array dati (required)</td></tr><tr><td><code>columns</code></td><td><code>TableColumnConfig[]</code></td><td>Colonne (required)</td></tr><tr><td><code>sortable</code></td><td><code>boolean</code></td><td>Abilita ordinamento</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>Titolo tabella</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class TableDemoComponent {
  activeTab = 'preview';
  tableColumns = [
    { key: 'nome', title: 'Nome' },
    { key: 'cognome', title: 'Cognome' },
    { key: 'ruolo', title: 'Ruolo' }
  ];
  tableData = [
    { nome: 'Mario', cognome: 'Rossi', ruolo: 'Admin' },
    { nome: 'Luigi', cognome: 'Verdi', ruolo: 'Editor' },
    { nome: 'Anna', cognome: 'Bianchi', ruolo: 'Viewer' }
  ];
  code = `tableColumns = [
  { key: 'nome', title: 'Nome' },
  { key: 'cognome', title: 'Cognome' },
  { key: 'ruolo', title: 'Ruolo' }
];
tableData = [
  { nome: 'Mario', cognome: 'Rossi', ruolo: 'Admin' },
  { nome: 'Luigi', cognome: 'Verdi', ruolo: 'Editor' }
];

<ngx-sirio-table [data]="tableData" [columns]="tableColumns"></ngx-sirio-table>`;
}
