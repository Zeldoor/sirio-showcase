import { Component } from '@angular/core';
@Component({
  selector: 'demo-sidenav',
  template: `<div class="component-demo">
    <div class="demo-header">
      <h1>Sidenav</h1>
      <p>Navigazione laterale con voci e sotto-voci.</p>
    </div>
    <div class="demo-tabs">
      <div class="tab-nav">
        <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
        <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
        <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
      </div>
      <div class="tab-content" *ngIf="activeTab==='preview'">
        <div class="demo-section">
          <h3>Sidenav con voci</h3>
          <div class="preview-area" style="max-width:300px">
            <ngx-sirio-sidenav>
              <ngx-sirio-sidenav-item>
                <i class="fas fa-home" style="margin-right: 8px"></i> Dashboard
              </ngx-sirio-sidenav-item>
              <ngx-sirio-sidenav-item>
                <i class="fas fa-users" style="margin-right: 8px"></i> Utenti
              </ngx-sirio-sidenav-item>
              <ngx-sirio-sidenav-item>
                <i class="fas fa-cog" style="margin-right: 8px"></i> Impostazioni
              </ngx-sirio-sidenav-item>
              <ngx-sirio-sidenav-item>
                <i class="fas fa-file" style="margin-right: 8px"></i> Documenti
              </ngx-sirio-sidenav-item>
            </ngx-sirio-sidenav>
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
        <h3>Inputs (SirioSidenavItem)</h3>
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
              <td><code>href</code></td>
              <td><code>string</code></td>
              <td>URL di navigazione</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270} .api-table{width:100%;border-collapse:collapse;margin-top:16px} .api-table th,.api-table td{text-align:left;padding:12px;border-bottom:1px solid #e2e8f0} .api-table th{font-weight:600;color:#1a202c}`]
})
export class SidenavDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-sidenav>
  <ngx-sirio-sidenav-item>
    <i class="fas fa-home" style="margin-right: 8px"></i> Dashboard
  </ngx-sirio-sidenav-item>
  <ngx-sirio-sidenav-item>
    <i class="fas fa-users" style="margin-right: 8px"></i> Utenti
  </ngx-sirio-sidenav-item>
  <ngx-sirio-sidenav-item>
    <i class="fas fa-cog" style="margin-right: 8px"></i> Impostazioni
  </ngx-sirio-sidenav-item>
</ngx-sirio-sidenav>`;
}
