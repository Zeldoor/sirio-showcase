import { Component } from '@angular/core';
@Component({
    selector: 'demo-expandable-container', template: `<div class="component-demo"><div class="demo-header"><h1>Expandable Container</h1><p>Contenitore espandibile con pulsante di apertura/chiusura.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Expandable Container</h3><div class="preview-area"><ngx-sirio-expandable-container [buttonLabels]="{openLabel: 'Mostra di più', closeLabel: 'Mostra di meno'}"><p>Questo è il contenuto espandibile. Può contenere qualsiasi tipo di contenuto HTML: testo, immagini, form e altri componenti.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></ngx-sirio-expandable-container></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>buttonLabels</code></td><td><code>object</code></td><td>Label apertura/chiusura</td></tr><tr><td><code>buttonIcons</code></td><td><code>object</code></td><td>Icone apertura/chiusura</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class ExpandableContainerDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-expandable-container
  [buttonLabels]="{openLabel: 'Mostra di più', closeLabel: 'Mostra di meno'}">
  <p>Contenuto espandibile...</p>
</ngx-sirio-expandable-container>`;
}
