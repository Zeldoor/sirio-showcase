import { Component } from '@angular/core';
@Component({
    selector: 'demo-carousel', template: `<div class="component-demo"><div class="demo-header"><h1>Carousel</h1><p>Carosello di contenuti scorrevoli.</p></div><div class="demo-tabs"><div class="tab-nav"><button class="tab-btn" [class.active]="activeTab==='preview'" (click)="activeTab='preview'">Preview</button><button class="tab-btn" [class.active]="activeTab==='code'" (click)="activeTab='code'">Code</button><button class="tab-btn" [class.active]="activeTab==='api'" (click)="activeTab='api'">API</button></div><div class="tab-content" *ngIf="activeTab==='preview'"><div class="demo-section"><h3>Carousel</h3><div class="preview-area"><ngx-sirio-carousel [elementsToShow]="1" titleArrowLeft="Precedente" titleArrowRight="Successivo"><ngx-sirio-carousel-element><div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px;border-radius:8px;color:#fff;text-align:center"><h3 style="margin:0 0 8px 0">Slide 1</h3><p style="margin:0;opacity:0.9">Prima slide del carousel</p></div></ngx-sirio-carousel-element><ngx-sirio-carousel-element><div style="background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);padding:40px;border-radius:8px;color:#fff;text-align:center"><h3 style="margin:0 0 8px 0">Slide 2</h3><p style="margin:0;opacity:0.9">Seconda slide del carousel</p></div></ngx-sirio-carousel-element><ngx-sirio-carousel-element><div style="background:linear-gradient(135deg,#4facfe 0%,#00f2fe 100%);padding:40px;border-radius:8px;color:#fff;text-align:center"><h3 style="margin:0 0 8px 0">Slide 3</h3><p style="margin:0;opacity:0.9">Terza slide del carousel</p></div></ngx-sirio-carousel-element></ngx-sirio-carousel></div></div></div><div class="tab-content" *ngIf="activeTab==='code'"><div class="demo-section"><div class="code-block"><div class="code-header"><span class="code-lang">HTML</span></div><pre>{{ code }}</pre></div></div></div><div class="tab-content" *ngIf="activeTab==='api'"><h3>Inputs</h3><table class="api-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>elementsToShow</code></td><td><code>number</code></td><td>Elementi visibili</td></tr><tr><td><code>autoSlide</code></td><td><code>number</code></td><td>Auto-slide (ms)</td></tr><tr><td><code>titleArrowLeft</code></td><td><code>string</code></td><td>Title freccia sinistra</td></tr><tr><td><code>titleArrowRight</code></td><td><code>string</code></td><td>Title freccia destra</td></tr></tbody></table></div></div></div>`,
    styles: [`:host{display:block} .demo-header{margin-bottom:24px} .demo-header h1{font-size:2rem} .demo-header p{color:#5a6270}`]
})
export class CarouselDemoComponent {
    activeTab = 'preview';
    code = `<ngx-sirio-carousel [elementsToShow]="1"
  titleArrowLeft="Precedente" titleArrowRight="Successivo">
  <ngx-sirio-carousel-element>
    <div>Slide 1</div>
  </ngx-sirio-carousel-element>
  <ngx-sirio-carousel-element>
    <div>Slide 2</div>
  </ngx-sirio-carousel-element>
</ngx-sirio-carousel>`;
}
