import { Component } from '@angular/core';
@Component({
  selector: 'demo-chip', template: `<div class="component-demo"><div class="demo-header"><h1>Chip</h1><p>Etichette compatte per informazioni, filtri o azioni.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Chip base</h3><div class="preview-area" style="display:flex;gap:8px;flex-wrap:wrap"><ngx-sirio-chip text="Default"></ngx-sirio-chip><ngx-sirio-chip text="Primario" color="primary"></ngx-sirio-chip><ngx-sirio-chip text="Secondario" color="secondary"></ngx-sirio-chip></div></div><div class="demo-section"><h3>Chip chiudibile</h3><div class="preview-area" style="display:flex;gap:8px;flex-wrap:wrap"><ng-container *ngFor="let chip of chips"><ngx-sirio-chip [text]="chip" [isClosable]="true" closeLabel="Chiudi" (closeEvent)="removeChip(chip)"></ngx-sirio-chip></ng-container></div></div><div class="demo-section"><h3>Chip disabilitato</h3><div class="preview-area"><ngx-sirio-chip text="Disabilitato" [disabled]="true"></ngx-sirio-chip></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>text</code></td><td><code>string</code></td><td>Testo del chip (required)</td></tr><tr><td><code>isClosable</code></td><td><code>boolean</code></td><td>Mostra bottone chiudi</td></tr><tr><td><code>closeLabel</code></td><td><code>string</code></td><td>Label bottone chiudi</td></tr><tr><td><code>color</code></td><td><code>string</code></td><td>Colore</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disabilita il chip</td></tr></tbody></table><h3>Outputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>closeEvent</code></td><td><code>EventEmitter</code></td><td>Evento chiusura</td></tr></tbody></table></div></div></div>`,
  styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class ChipDemoComponent {
  activeTab = 'preview';
  chips = ['Angular', 'React', 'Vue'];
  removeChip(chip: string) {
    this.chips = this.chips.filter(c => c !== chip);
  }
  code = `<ngx-sirio-chip text="Default"></ngx-sirio-chip>

<!-- Chiudibile -->
<ngx-sirio-chip text="Angular" [isClosable]="true"
  closeLabel="Chiudi" (closeEvent)="removeChip('Angular')">
</ngx-sirio-chip>`;
}
