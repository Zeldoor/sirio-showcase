import { Component } from '@angular/core';
@Component({
  selector: 'demo-rangepicker', template: `<div class="component-demo"><div class="demo-header"><h1>Range Picker</h1><p>Selettore per intervallo di date con data inizio e data fine.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Range Picker</h3><div class="preview-area"><ngx-sirio-rangepicker label="Periodo"><ngx-sirio-rangepicker-input startDate label="Data inizio"></ngx-sirio-rangepicker-input><ngx-sirio-rangepicker-input endDate label="Data fine"></ngx-sirio-rangepicker-input></ngx-sirio-rangepicker></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label del componente</td></tr><tr><td><code>disabledState</code></td><td><code>boolean</code></td><td>Disabilita il componente</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class RangepickerDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-rangepicker label="Periodo">
  <ngx-sirio-rangepicker-input startDate label="Data inizio"></ngx-sirio-rangepicker-input>
  <ngx-sirio-rangepicker-input endDate label="Data fine"></ngx-sirio-rangepicker-input>
</ngx-sirio-rangepicker>`;
}
