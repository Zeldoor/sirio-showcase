import { Component } from '@angular/core';
@Component({
  selector: 'demo-checkbox-group', template: `<div class="component-demo"><div class="demo-header"><h1>Checkbox Group</h1><p>Gruppo di checkbox per selezione multipla.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Gruppo checkbox</h3><div class="preview-area"><ngx-sirio-checkbox-group label="Seleziona interessi"><ngx-sirio-checkbox label="Sport" value="sport"></ngx-sirio-checkbox><ngx-sirio-checkbox label="Musica" value="musica"></ngx-sirio-checkbox><ngx-sirio-checkbox label="Cinema" value="cinema"></ngx-sirio-checkbox><ngx-sirio-checkbox label="Viaggi" value="viaggi"></ngx-sirio-checkbox></ngx-sirio-checkbox-group></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td>Label del gruppo</td></tr><tr><td><code>textHelp</code></td><td><code>string</code></td><td>Testo di aiuto</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class CheckboxGroupDemoComponent {
  activeTab = 'preview';
  code = `<ngx-sirio-checkbox-group label="Seleziona interessi">
  <ngx-sirio-checkbox label="Sport" value="sport"></ngx-sirio-checkbox>
  <ngx-sirio-checkbox label="Musica" value="musica"></ngx-sirio-checkbox>
  <ngx-sirio-checkbox label="Cinema" value="cinema"></ngx-sirio-checkbox>
  <ngx-sirio-checkbox label="Viaggi" value="viaggi"></ngx-sirio-checkbox>
</ngx-sirio-checkbox-group>`;
}
