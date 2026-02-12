import { Component } from '@angular/core';

@Component({
    selector: 'demo-button',
    template: `
    <div class="component-demo">
      <div class="demo-header">
        <h1>Button</h1>
        <p>Bottone con varianti di colore, dimensione e icone. Supporta stati disabled, floating e block.</p>
        <div class="demo-tags"><span class="demo-tag">Form</span><span class="demo-tag">Interaction</span></div>
      </div>

      <!-- Tab Navigation -->
      <div class="demo-tabs">
        <div class="tab-nav">
          <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
          <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
          <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
        </div>

        <!-- PREVIEW TAB -->
        <div class="tab-content" *ngIf="activeTab==='preview'">
          <div class="demo-section">
            <h3>Varianti Colore</h3>
            <p>Tutti i colori disponibili per il bottone.</p>
            <div class="preview-area">
              <ngx-sirio-button color="primary">Primary</ngx-sirio-button>
              <ngx-sirio-button color="secondary">Secondary</ngx-sirio-button>
              <ngx-sirio-button color="tertiary">Tertiary</ngx-sirio-button>
              <ngx-sirio-button color="tertiary-light">Tertiary Light</ngx-sirio-button>
              <ngx-sirio-button color="danger">Danger</ngx-sirio-button>
            </div>
          </div>

          <div class="demo-section">
            <h3>Stato Disabilitato</h3>
            <div class="preview-area">
              <ngx-sirio-button color="primary" [disabled]="true">Disabled Primary</ngx-sirio-button>
              <ngx-sirio-button color="secondary" [disabled]="true">Disabled Secondary</ngx-sirio-button>
            </div>
          </div>

          <div class="demo-section">
            <h3>Bottone Block</h3>
            <div class="preview-area" style="flex-direction:column;">
              <ngx-sirio-button color="primary" [isBtnBlock]="true">Block Button</ngx-sirio-button>
            </div>
          </div>

          <div class="demo-section">
            <h3>Evento Click</h3>
            <div class="preview-area">
              <ngx-sirio-button color="primary" (clickEvent)="clickCount = clickCount + 1">
                Cliccato: {{ clickCount }} volte
              </ngx-sirio-button>
            </div>
          </div>
        </div>

        <!-- CODE TAB -->
        <div class="tab-content" *ngIf="activeTab==='code'">
          <div class="demo-section">
            <h3>Uso Base</h3>
            <div class="code-block">
              <div class="code-header">
                <span class="code-lang">HTML</span>
                <button class="copy-btn" (click)="copyCode(codeBasic)"><span class="material-icons">content_copy</span> Copia</button>
              </div>
              <pre>{{ codeBasic }}</pre>
            </div>
          </div>

          <div class="demo-section">
            <h3>Tutte le Varianti</h3>
            <div class="code-block">
              <div class="code-header">
                <span class="code-lang">HTML</span>
                <button class="copy-btn" (click)="copyCode(codeVariants)"><span class="material-icons">content_copy</span> Copia</button>
              </div>
              <pre>{{ codeVariants }}</pre>
            </div>
          </div>

          <div class="demo-section">
            <h3>TypeScript</h3>
            <div class="code-block">
              <div class="code-header">
                <span class="code-lang">TypeScript</span>
                <button class="copy-btn" (click)="copyCode(codeTs)"><span class="material-icons">content_copy</span> Copia</button>
              </div>
              <pre>{{ codeTs }}</pre>
            </div>
          </div>
        </div>

        <!-- API TAB -->
        <div class="tab-content" *ngIf="activeTab==='api'">
          <h3>Inputs</h3>
          <table class="api-table">
            <thead><tr><th>Nome</th><th>Tipo</th><th>Default</th><th>Descrizione</th></tr></thead>
            <tbody>
              <tr><td><code>color</code></td><td><code>ButtonColors</code></td><td><code>'primary'</code></td><td>Colore del bottone</td></tr>
              <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Stato disabilitato</td></tr>
              <tr><td><code>icon</code></td><td><code>string</code></td><td><code>''</code></td><td>Classe icona</td></tr>
              <tr><td><code>isFloating</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Bottone floating (FAB)</td></tr>
              <tr><td><code>isExtended</code></td><td><code>boolean</code></td><td><code>false</code></td><td>FAB con testo</td></tr>
              <tr><td><code>isSmall</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Dimensione ridotta</td></tr>
              <tr><td><code>isLight</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Stile light</td></tr>
              <tr><td><code>isBtnBlock</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Larghezza piena</td></tr>
              <tr><td><code>type</code></td><td><code>ButtonTypes</code></td><td><code>'button'</code></td><td>Tipo: button, submit, link</td></tr>
            </tbody>
          </table>

          <h3>Outputs</h3>
          <table class="api-table">
            <thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead>
            <tbody>
              <tr><td><code>clickEvent</code></td><td><code>EventEmitter&lt;NgxSirioEvent&gt;</code></td><td>Emesso al click</td></tr>
              <tr><td><code>focusEvent</code></td><td><code>EventEmitter&lt;NgxSirioEvent&gt;</code></td><td>Emesso al focus</td></tr>
              <tr><td><code>blurEvent</code></td><td><code>EventEmitter&lt;NgxSirioEvent&gt;</code></td><td>Emesso al blur</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
    styles: [`:host { display: block; } .demo-header { margin-bottom: 24px; } .demo-header h1 { font-size: 2rem; } .demo-header p { color: #5a6270; margin: 8px 0; } .demo-tags { display: flex; gap: 8px; margin-top: 8px; }`]
})
export class ButtonDemoComponent {
    activeTab = 'preview';
    clickCount = 0;

    codeBasic = `<ngx-sirio-button color="primary">Click me</ngx-sirio-button>`;

    codeVariants = `<ngx-sirio-button color="primary">Primary</ngx-sirio-button>
<ngx-sirio-button color="secondary">Secondary</ngx-sirio-button>
<ngx-sirio-button color="tertiary">Tertiary</ngx-sirio-button>
<ngx-sirio-button color="tertiary-light">Tertiary Light</ngx-sirio-button>
<ngx-sirio-button color="danger">Danger</ngx-sirio-button>

<!-- Disabled -->
<ngx-sirio-button color="primary" [disabled]="true">Disabled</ngx-sirio-button>

<!-- Block -->
<ngx-sirio-button color="primary" [isBtnBlock]="true">Block</ngx-sirio-button>`;

    codeTs = `import { SirioButtonComponent } from 'ngx-sirio-lib';

@Component({
  standalone: true,
  imports: [SirioButtonComponent],
  template: \`
    <ngx-sirio-button
      color="primary"
      (clickEvent)="onClick($event)">
      Click me
    </ngx-sirio-button>
  \`
})
export class MyComponent {
  onClick(event: NgxSirioEvent<SirioButtonComponent>) {
    console.log('clicked', event);
  }
}`;

    copyCode(code: string) {
        navigator.clipboard.writeText(code);
    }
}
