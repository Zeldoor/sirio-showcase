import { Component } from '@angular/core';
@Component({
    selector: 'demo-toast', template: `<div class="component-demo"><div class="demo-header"><h1>Toast</h1><p>Toast notification temporanea con auto-dismiss.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Toast (via Service)</h3><p>I toast vengono mostrati tramite il servizio SirioToastService.</p><div class="preview-area"><p style="color:#5a6270;font-size:0.9rem;">Il Toast richiede SirioToastService per essere invocato programmaticamente. Vedere il codice d'esempio.</p></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">TypeScript</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Service</h3><table class="api-table"><thead><tr><th>Metodo</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>show(config)</code></td><td><code>ToastConfig</code></td><td>Mostra toast</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class ToastDemoComponent {
    activeTab = 'preview';
    code = `import { SirioToastService } from 'ngx-sirio-lib';

@Component({ ... })
export class MyComponent {
  constructor(private toast: SirioToastService) {}

  showToast() {
    this.toast.show({
      type: 'success',
      message: 'Operazione completata!'
    });
  }
}`;
}
