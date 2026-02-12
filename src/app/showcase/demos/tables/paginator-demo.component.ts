import { Component } from '@angular/core';
@Component({
  selector: 'demo-paginator', template: `<div class="component-demo"><div class="demo-header"><h1>Paginator</h1><p>Componente di paginazione per navigare tra le pagine di contenuti.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Paginator</h3><div class="preview-area"><ngx-sirio-paginator [currentPage]="1" [totalPages]="10"></ngx-sirio-paginator></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>currentPage</code></td><td><code>number</code></td><td>Pagina attuale</td></tr><tr><td><code>totalPages</code></td><td><code>number</code></td><td>Totale pagine</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class PaginatorDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-paginator [currentPage]="1" [totalPages]="10"></ngx-sirio-paginator>`;
}
