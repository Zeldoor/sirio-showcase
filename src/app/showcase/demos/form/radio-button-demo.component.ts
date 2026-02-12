import { Component } from '@angular/core';
@Component({
    selector: 'demo-radio-button',
    template: `
    <div class="component-demo">
      <div class="demo-header"><h1>Radio Button</h1><p>Radio button singolo con stati checked e disabled.</p></div>
      <div class="demo-tabs">
        <div class="tab-nav">
          <button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button>
          <button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button>
          <button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button>
        </div>
        <div class="tab-content" *ngIf="activeTab==='preview'">
          <div class="demo-section"><h3>Radio Button</h3><div class="preview-area" style="flex-direction:column;align-items:flex-start;">
            <ngx-sirio-radio-button label="Opzione A" value="a" name="demo-radio"></ngx-sirio-radio-button>
            <ngx-sirio-radio-button label="Opzione B" value="b" name="demo-radio"></ngx-sirio-radio-button>
            <ngx-sirio-radio-button label="Disabilitata" value="c" name="demo-radio" disabled="true"></ngx-sirio-radio-button>
          </div></div>
        </div>
        <div class="tab-content" *ngIf="activeTab==='code'">
          <div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div>
        </div>
        <div class="tab-content" *ngIf="activeTab==='api'">
          <h3>Inputs</h3>
          <table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody>
            <tr><td><code>label</code></td><td><code>string</code></td><td>Testo label</td></tr>
            <tr><td><code>value</code></td><td><code>any</code></td><td>Valore</td></tr>
            <tr><td><code>name</code></td><td><code>string</code></td><td>Nome gruppo</td></tr>
            <tr><td><code>disabled</code></td><td><code>TrueFalseType</code></td><td>Disabilitato</td></tr>
            <tr><td><code>checked</code></td><td><code>TrueFalseType</code></td><td>Selezionato</td></tr>
          </tbody></table>
        </div>
      </div>
    </div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class RadioButtonDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-radio-button label="Opzione A" value="a" name="group1"></ngx-sirio-radio-button>
<ngx-sirio-radio-button label="Opzione B" value="b" name="group1"></ngx-sirio-radio-button>`;
}
