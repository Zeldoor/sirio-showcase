import { Component } from '@angular/core';
@Component({
    selector: 'demo-card', template: `
    <div class="component-demo">
      <div class="demo-header"><h1>Card</h1><p>Card con header, body, footer e varianti di layout.</p></div>
      <div class="demo-tabs">
        <div class="tab-nav">
          <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
          <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
          <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
        </div>
        <div class="tab-content" *ngIf="activeTab==='preview'">
          <div class="demo-section"><h3>Card Base</h3><div class="preview-area" style="display:block;">
            <ngx-sirio-card style="max-width:400px;display:block;">
              <ngx-sirio-card-header title="Titolo Card"></ngx-sirio-card-header>
              <ngx-sirio-card-body>
                <ngx-sirio-card-title>Sottotitolo</ngx-sirio-card-title>
                <ngx-sirio-card-text>Contenuto della card con testo esplicativo. Questa è una card base del design system INPS.</ngx-sirio-card-text>
              </ngx-sirio-card-body>
            </ngx-sirio-card>
          </div></div>
        </div>
        <div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div>
        <div class="tab-content" *ngIf="activeTab==='api'"><h3>Sub-componenti</h3><table class="api-table"><thead><tr><th>Selettore</th><th>Descrizione</th></tr></thead><tbody>
          <tr><td><code>ngx-sirio-card</code></td><td>Container card</td></tr>
          <tr><td><code>ngx-sirio-card-header</code></td><td>Header della card</td></tr>
          <tr><td><code>ngx-sirio-card-body</code></td><td>Body della card</td></tr>
          <tr><td><code>ngx-sirio-card-title</code></td><td>Titolo nel body</td></tr>
          <tr><td><code>ngx-sirio-card-text</code></td><td>Testo nel body</td></tr>
          <tr><td><code>ngx-sirio-card-footer</code></td><td>Footer della card</td></tr>
        </tbody></table>
        <h3>Inputs (Card)</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody>
          <tr><td><code>imageSrc</code></td><td><code>string</code></td><td>URL immagine</td></tr>
          <tr><td><code>imagePosition</code></td><td><code>CardImgPositions</code></td><td>Posizione: left, top, right</td></tr>
          <tr><td><code>isDark</code></td><td><code>boolean</code></td><td>Tema scuro</td></tr>
        </tbody></table></div>
      </div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class CardDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-card>
  <ngx-sirio-card-header title="Titolo"></ngx-sirio-card-header>
  <ngx-sirio-card-body>
    <ngx-sirio-card-title>Sottotitolo</ngx-sirio-card-title>
    <ngx-sirio-card-text>Contenuto della card.</ngx-sirio-card-text>
  </ngx-sirio-card-body>
</ngx-sirio-card>`;
}
