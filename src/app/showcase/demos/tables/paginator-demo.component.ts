import { Component } from '@angular/core';
import { NgxSirioEvent, SirioPaginatorComponent } from 'ngx-sirio-lib';

@Component({
  selector: 'demo-paginator',
  template: `<div class="component-demo">
    <div class="demo-header">
      <h1>Paginator</h1>
      <p>Componente di paginazione per navigare tra le pagine di contenuti.</p>
    </div>
    <div class="demo-tabs">
      <div class="tab-nav">
        <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
        <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
        <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
      </div>
      <div class="tab-content" *ngIf="activeTab==='preview'">
        <div class="demo-section">
          <h3>Paginator</h3>
          <div class="preview-area">
            <ngx-sirio-paginator 
              [pageIndex]="pageIndex" 
              [length]="length" 
              [pageSize]="pageSize" 
              [pageSizeOptions]="pageSizeOptions"
              [showPaginationButton]="true" 
              [showComboPagination]="true" 
              (changePageEvent)="onPageChange($event)">
            </ngx-sirio-paginator>
          </div>
        </div>
      </div>
      <div class="tab-content" *ngIf="activeTab==='code'">
        <div class="demo-section">
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang">HTML</span>
            </div>
            <pre>{{ code }}</pre>
          </div>
        </div>
      </div>
      <div class="tab-content" *ngIf="activeTab==='api'">
        <h3>Inputs</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>pageIndex</code></td>
              <td><code>number</code></td>
              <td>Indice della pagina corrente (0-based)</td>
            </tr>
            <tr>
              <td><code>length</code></td>
              <td><code>number</code></td>
              <td>Numero totale di elementi</td>
            </tr>
            <tr>
              <td><code>pageSize</code></td>
              <td><code>number</code></td>
              <td>Numero di elementi per pagina</td>
            </tr>
            <tr>
              <td><code>pageSizeOptions</code></td>
              <td><code>number[]</code></td>
              <td>Opzioni per il numero di elementi per pagina</td>
            </tr>
            <tr>
              <td><code>showPaginationButton</code></td>
              <td><code>boolean</code></td>
              <td>Mostra i pulsanti di navigazione</td>
            </tr>
             <tr>
              <td><code>showComboPagination</code></td>
              <td><code>boolean</code></td>
              <td>Mostra il combo per la selezione della pagina</td>
            </tr>
          </tbody>
        </table>
        <h3>Outputs</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>changePageEvent</code></td>
              <td><code>EventEmitter</code></td>
              <td>Evento emesso al cambio pagina o dimensione pagina</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class PaginatorDemoComponent {
  activeTab = 'preview';

  pageIndex = 0;
  length = 23;
  pageSize = 10;
  pageSizeOptions = [10, 20, 50];

  code = `<ngx-sirio-paginator 
  [pageIndex]="1" 
  [length]="23" 
  [pageSize]="10" 
  [pageSizeOptions]="[10, 20, 50]"
  [showPaginationButton]="true" 
  [showComboPagination]="true" 
  (changePageEvent)="onPageChange($event)">
</ngx-sirio-paginator>


onPageChange(event: NgxSirioEvent<SirioPaginatorComponent>) {
  console.log('Page changed:', event);
  this.pageIndex = event.data?.pageIndex;
  this.pageSize = event.data?.pageSize;
}`;

  onPageChange(event: NgxSirioEvent<SirioPaginatorComponent>) {
    console.log('Page changed:', event);
    this.pageIndex = event.data?.pageIndex;
    this.pageSize = event.data?.pageSize;
  }
}
