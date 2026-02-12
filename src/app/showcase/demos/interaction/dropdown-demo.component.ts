import { Component } from '@angular/core';
@Component({
  selector: 'demo-dropdown', template: `<div class="component-demo"><div class="demo-header"><h1>Dropdown</h1><p>Menu a tendina con opzioni selezionabili.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Dropdown Menu</h3><div class="preview-area"><ngx-sirio-dropdown label="Azioni" color="primary"><ngx-sirio-dropdown-panel><ngx-sirio-dropdown-option value="modifica">Modifica</ngx-sirio-dropdown-option><ngx-sirio-dropdown-option value="duplica">Duplica</ngx-sirio-dropdown-option><ngx-sirio-dropdown-option value="elimina">Elimina</ngx-sirio-dropdown-option></ngx-sirio-dropdown-panel></ngx-sirio-dropdown></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label del bottone (required)</td></tr><tr><td><code>color</code></td><td><code>ButtonColors</code></td><td>Colore del bottone</td></tr><tr><td><code>icon</code></td><td><code>string</code></td><td>Icona del bottone</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class DropdownDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-dropdown label="Azioni" color="primary">
  <ngx-sirio-dropdown-panel>
    <ngx-sirio-dropdown-option value="modifica">Modifica</ngx-sirio-dropdown-option>
    <ngx-sirio-dropdown-option value="duplica">Duplica</ngx-sirio-dropdown-option>
    <ngx-sirio-dropdown-option value="elimina">Elimina</ngx-sirio-dropdown-option>
  </ngx-sirio-dropdown-panel>
</ngx-sirio-dropdown>`;
}
