import { Component } from '@angular/core';
@Component({
  selector: 'demo-collapse', template: `<div class="component-demo"><div class="demo-header"><h1>Collapse</h1><p>Contenitore collassabile con trigger personalizzabile.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Collapse con trigger</h3><div class="preview-area"><ngx-sirio-button color="primary" [ngxSirioCollapseTrigger]="myCollapse">Apri / Chiudi </ngx-sirio-button><ngx-sirio-collapse #myCollapse><div style="padding:16px;background:#f0f4f8;border-radius:8px;margin-top:8px"><p>Questo è il contenuto collassabile. Clicca il bottone sopra per mostrare/nascondere.</p><p>Puoi inserire qualsiasi contenuto qui dentro.</p></div></ngx-sirio-collapse></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>isOpen</code></td><td><code>boolean</code></td><td>Stato aperto/chiuso</td></tr></tbody></table><h3>Directive: ngxSirioCollapseTrigger</h3><p>Applicare ad un bottone per collegarlo al componente collapse.</p></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class CollapseDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-button color="primary"
  [ngxSirioCollapseTrigger]="myCollapse">
  Apri / Chiudi 
</ngx-sirio-button>

<ngx-sirio-collapse #myCollapse>
  <div style="padding:16px">
    Contenuto collassabile...
  </div>
</ngx-sirio-collapse>`;
}
