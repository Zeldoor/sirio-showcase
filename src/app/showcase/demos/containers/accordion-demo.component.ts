import { Component } from '@angular/core';
@Component({
  selector: 'demo-accordion', template: `<div class="component-demo"><div class="demo-header"><h1>Accordion</h1><p>Accordion espandibile con pannelli multipli.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Accordion</h3><div class="preview-area" style="display:block;">
<ngx-sirio-accordion>
  <ngx-sirio-accordion-panel>
    <ngx-sirio-accordion-header>Sezione 1</ngx-sirio-accordion-header>
    <ngx-sirio-accordion-body>Contenuto della prima sezione dell'accordion.</ngx-sirio-accordion-body>
  </ngx-sirio-accordion-panel>
  <ngx-sirio-accordion-panel>
    <ngx-sirio-accordion-header>Sezione 2</ngx-sirio-accordion-header>
    <ngx-sirio-accordion-body>Contenuto della seconda sezione dell'accordion.</ngx-sirio-accordion-body>
  </ngx-sirio-accordion-panel>
  <ngx-sirio-accordion-panel>
    <ngx-sirio-accordion-header>Sezione 3</ngx-sirio-accordion-header>
    <ngx-sirio-accordion-body>Contenuto della terza sezione.</ngx-sirio-accordion-body>
  </ngx-sirio-accordion-panel>
</ngx-sirio-accordion>
</div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Sub-componenti</h3><table class="api-table"><thead><tr><th>Selettore</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>ngx-sirio-accordion</code></td><td>Container accordion</td></tr><tr><td><code>ngx-sirio-accordion-panel</code></td><td>Singolo pannello</td></tr><tr><td><code>ngx-sirio-accordion-header</code></td><td>Header del pannello</td></tr><tr><td><code>ngx-sirio-accordion-body</code></td><td>Body del pannello</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class AccordionDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-accordion>
  <ngx-sirio-accordion-panel>
    <ngx-sirio-accordion-header>Titolo</ngx-sirio-accordion-header>
    <ngx-sirio-accordion-body>Contenuto</ngx-sirio-accordion-body>
  </ngx-sirio-accordion-panel>
</ngx-sirio-accordion>`;
}
