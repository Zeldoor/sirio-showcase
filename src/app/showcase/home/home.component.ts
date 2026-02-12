import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface CategoryCard {
    id: string;
    name: string;
    icon: string;
    description: string;
    count: number;
    color: string;
}

@Component({
    selector: 'app-home',
    template: `
    <!-- Hero Section -->
    <div class="home-hero">
      <div class="hero-badge">
        <span class="material-icons">widgets</span>
        Design System INPS
      </div>
      <h1>ngx-sirio-lib <span class="version">v1.3.2-A16</span></h1>
      <p class="hero-desc">
        Libreria di componenti Angular 16+ basata sul Design System INPS.
        Esplora tutti i <strong>45 componenti</strong> con preview live, codice sorgente e documentazione API.
      </p>
      <div class="hero-actions">
        <button class="hero-btn primary" (click)="navigateTo('button')">
          <span class="material-icons">play_arrow</span>
          Inizia a Esplorare
        </button>
        <a class="hero-btn secondary" href="https://www.inps.design/" target="_blank" rel="noopener">
          <span class="material-icons">open_in_new</span>
          INPS Design System
        </a>
      </div>
    </div>

    <!-- Categories Grid -->
    <div class="categories-section">
      <h2>Categorie Componenti</h2>
      <div class="categories-grid">
        <div *ngFor="let cat of categories"
             class="category-card"
             [style.--cat-color]="cat.color"
             (click)="navigateToCategory(cat.id)">
          <div class="card-icon">
            <span class="material-icons">{{ cat.icon }}</span>
          </div>
          <div class="card-info">
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
          </div>
          <div class="card-count">{{ cat.count }}</div>
        </div>
      </div>
    </div>

    <!-- Quick Start -->
    <div class="quickstart-section">
      <h2>Quick Start</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">bash</span>
        </div>
        <pre>npm install ./libs/ngx-sirio-lib-1_3_2-A16.tgz --legacy-peer-deps</pre>
      </div>
      <div class="code-block" style="margin-top: 12px;">
        <div class="code-header">
          <span class="code-lang">typescript</span>
        </div>
        <pre>import {{ '{' }} SirioButtonComponent {{ '}' }} from 'ngx-sirio-lib';

@Component({{ '{' }}
  standalone: true,
  imports: [SirioButtonComponent],
  template: \`&lt;ngx-sirio-button color="primary"&gt;Click me&lt;/ngx-sirio-button&gt;\`
{{ '}' }})
export class MyComponent {{ '{' }} {{ '}' }}</pre>
      </div>
    </div>
  `,
    styles: [`
    :host { display: block; }

    .home-hero {
      text-align: center;
      padding: 48px 24px 40px;
      background: linear-gradient(135deg, #e3f0ff 0%, #f0f7ff 50%, #e8f5e9 100%);
      border-radius: 16px;
      margin-bottom: 40px;

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 14px;
        background: white;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
        color: #0059b3;
        margin-bottom: 16px;
        box-shadow: 0 2px 8px rgba(0,89,179,.1);
        .material-icons { font-size: 16px; }
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1a1a2e;
        margin-bottom: 12px;
        .version {
          font-size: 1rem;
          font-weight: 400;
          color: #5a6270;
          vertical-align: middle;
        }
      }

      .hero-desc {
        max-width: 600px;
        margin: 0 auto 24px;
        color: #5a6270;
        font-size: 1.05rem;
        line-height: 1.6;
      }

      .hero-actions {
        display: flex;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .hero-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        border: none;
        font-family: inherit;
        text-decoration: none;
        transition: all 200ms ease;

        .material-icons { font-size: 18px; }

        &.primary {
          background: #0059b3;
          color: white;
          &:hover { background: #003d80; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,89,179,.3); }
        }
        &.secondary {
          background: white;
          color: #0059b3;
          border: 1px solid #d0d9e0;
          &:hover { background: #f0f4f8; }
        }
      }
    }

    .categories-section {
      margin-bottom: 40px;

      h2 {
        font-size: 1.3rem;
        color: #1a1a2e;
        margin-bottom: 20px;
      }
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
    }

    .category-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px;
      background: white;
      border-radius: 12px;
      border: 1px solid #e8ecf0;
      cursor: pointer;
      transition: all 200ms ease;

      &:hover {
        border-color: var(--cat-color, #0059b3);
        box-shadow: 0 4px 16px rgba(0,0,0,.06);
        transform: translateY(-2px);
      }

      .card-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: color-mix(in srgb, var(--cat-color, #0059b3), transparent 88%);
        .material-icons {
          font-size: 24px;
          color: var(--cat-color, #0059b3);
        }
      }

      .card-info {
        flex: 1;
        h3 {
          font-size: 0.95rem;
          font-weight: 500;
          color: #1a1a2e;
          margin-bottom: 2px;
        }
        p {
          font-size: 0.8rem;
          color: #8e99a4;
          margin: 0;
        }
      }

      .card-count {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--cat-color, #0059b3);
        opacity: 0.7;
      }
    }

    .quickstart-section {
      h2 {
        font-size: 1.3rem;
        color: #1a1a2e;
        margin-bottom: 16px;
      }
    }

    @media (max-width: 600px) {
      .home-hero h1 { font-size: 1.8rem; }
      .categories-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HomeComponent {
    categories: CategoryCard[] = [
        { id: 'form', name: 'Form Components', icon: 'edit', description: 'Input, select, checkbox, datepicker e più', count: 17, color: '#0059b3' },
        { id: 'layout', name: 'Layout & Navigation', icon: 'dashboard', description: 'Header, footer, sidenav, breadcrumb', count: 5, color: '#7b1fa2' },
        { id: 'containers', name: 'Containers', icon: 'crop_square', description: 'Card, accordion, collapse, hero', count: 5, color: '#00695c' },
        { id: 'tables', name: 'Tables & Data', icon: 'table_chart', description: 'Table, table builder, paginator', count: 3, color: '#e65100' },
        { id: 'interaction', name: 'Interaction', icon: 'touch_app', description: 'Dropdown, tab, chip, tooltip, carousel', count: 9, color: '#c62828' },
        { id: 'feedback', name: 'Feedback', icon: 'notifications', description: 'Alert, notify, toast, dialog, progress', count: 6, color: '#2e7d32' },
    ];

    constructor(private router: Router) { }

    navigateTo(id: string) {
        this.router.navigate(['/components', id]);
    }

    navigateToCategory(catId: string) {
        // Naviga al primo componente della categoria
        const firstComponent: Record<string, string> = {
            form: 'button',
            layout: 'sirio-header',
            containers: 'card',
            tables: 'table',
            interaction: 'dropdown',
            feedback: 'alert'
        };
        this.navigateTo(firstComponent[catId] || 'button');
    }
}
