import { Component } from '@angular/core';
@Component({
    selector: 'demo-dialog', template: `<div class="component-demo"><div class="demo-header"><h1>Dialog</h1><p>Dialog modale con contenuto personalizzabile.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Dialog</h3><p>Il dialog viene aperto tramite SirioDialogService.</p><div class="preview-area"><p style="color:#5a6270;font-size:0.9rem;">I dialog vengono aperti programmaticamente. Vedere il codice d'esempio.</p></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">TypeScript</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Service</h3><table class="api-table"><thead><tr><th>Metodo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>open(component, config)</code></td><td>Apre il dialog</td></tr><tr><td><code>close()</code></td><td>Chiude il dialog</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class DialogDemoComponent {
    activeTab = 'preview';
    code = `import { SirioDialogService } from 'ngx-sirio-lib';

@Component({ ... })
export class MyComponent {
  constructor(private dialog: SirioDialogService) {}

  openDialog() {
    this.dialog.open(MyDialogComponent, {
      title: 'Conferma',
      message: 'Vuoi procedere?'
    });
  }
}`;
}
