import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Struttura metadata componenti
interface ComponentMeta {
  id: string;
  name: string;
  selector: string;
  description: string;
}

interface CategoryMeta {
  id: string;
  name: string;
  icon: string;
  expanded: boolean;
  components: ComponentMeta[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-sirio-lib';
  version = '1.3.2-A16';
  searchTerm = '';
  sidebarOpen = false;
  activeComponentId = '';

  // Categorie componenti per la sidebar
  categories: CategoryMeta[] = [
    {
      id: 'form', name: 'Form Components', icon: 'edit', expanded: true,
      components: [
        { id: 'button', name: 'Button', selector: 'ngx-sirio-button', description: 'Bottone con varianti colore e dimensione' },
        { id: 'input', name: 'Input', selector: 'ngx-sirio-input', description: 'Input testuale con validazione' },
        { id: 'autocomplete', name: 'Autocomplete', selector: 'ngx-sirio-autocomplete', description: 'Input con suggerimenti' },
        { id: 'select', name: 'Select', selector: 'ngx-sirio-select', description: 'Dropdown select' },
        { id: 'slider', name: 'Slider', selector: 'ngx-sirio-slider', description: 'Slider numerico' },
        { id: 'checkbox', name: 'Checkbox', selector: 'ngx-sirio-checkbox', description: 'Checkbox singolo' },
        { id: 'checkbox-group', name: 'Checkbox Group', selector: 'ngx-sirio-checkbox-group', description: 'Gruppo di checkbox' },
        { id: 'radio-button', name: 'Radio Button', selector: 'ngx-sirio-radio-button', description: 'Radio button singolo' },
        { id: 'radio-group', name: 'Radio Group', selector: 'ngx-sirio-radio-group', description: 'Gruppo di radio' },
        { id: 'toggle', name: 'Toggle', selector: 'ngx-sirio-toggle', description: 'Toggle switch' },
        { id: 'datepicker', name: 'Datepicker', selector: 'ngx-sirio-datepicker', description: 'Selettore data' },
        { id: 'rangepicker', name: 'Rangepicker', selector: 'ngx-sirio-rangepicker', description: 'Selettore intervallo' },
        { id: 'timepicker', name: 'Timepicker', selector: 'ngx-sirio-timepicker', description: 'Selettore orario' },
        { id: 'file-upload', name: 'File Upload', selector: 'ngx-sirio-file-upload', description: 'Caricamento file' },
        { id: 'input-chip', name: 'Input Chip', selector: 'ngx-sirio-input-chip', description: 'Input con chip' },
        { id: 'chip-radio-group', name: 'Chip Radio Group', selector: 'ngx-sirio-chip-radio-group', description: 'Chip come radio' },
        { id: 'chip-checkbox-group', name: 'Chip Checkbox Group', selector: 'ngx-sirio-chip-checkbox-group', description: 'Chip come checkbox' },
      ]
    },
    {
      id: 'layout', name: 'Layout & Navigation', icon: 'dashboard', expanded: false,
      components: [
        { id: 'sirio-header', name: 'Header', selector: 'ngx-sirio-header', description: 'Header con logo e navigazione' },
        { id: 'sirio-footer', name: 'Footer', selector: 'ngx-sirio-footer', description: 'Footer pagina' },
        { id: 'sidenav', name: 'Sidenav', selector: 'ngx-sirio-sidenav', description: 'Navigazione laterale' },
        { id: 'sidenav-mobile', name: 'Sidenav Mobile', selector: 'ngx-sirio-sidenav-mobile', description: 'Sidenav responsive' },
        { id: 'breadcrumb', name: 'Breadcrumb', selector: 'ngx-sirio-breadcrumb', description: 'Breadcrumb navigazione' },
      ]
    },
    {
      id: 'containers', name: 'Containers', icon: 'crop_square', expanded: false,
      components: [
        { id: 'card', name: 'Card', selector: 'ngx-sirio-card', description: 'Card con header/body/footer' },
        { id: 'expandable-container', name: 'Expandable Container', selector: 'ngx-sirio-expandable-container', description: 'Container espandibile' },
        { id: 'accordion', name: 'Accordion', selector: 'ngx-sirio-accordion', description: 'Accordion con pannelli' },
        { id: 'collapse', name: 'Collapse', selector: 'ngx-sirio-collapse', description: 'Collapse animato' },
        { id: 'hero', name: 'Hero', selector: 'ngx-sirio-hero', description: 'Hero section' },
      ]
    },
    {
      id: 'tables', name: 'Tables & Data', icon: 'table_chart', expanded: false,
      components: [
        { id: 'table', name: 'Table', selector: 'ngx-sirio-table', description: 'Tabella HTML' },
        { id: 'table-builder', name: 'Table Builder', selector: 'ngx-sirio-table-builder', description: 'Tabella avanzata' },
        { id: 'paginator', name: 'Paginator', selector: 'ngx-sirio-paginator', description: 'Paginazione' },
      ]
    },
    {
      id: 'interaction', name: 'Interaction', icon: 'touch_app', expanded: false,
      components: [
        { id: 'dropdown', name: 'Dropdown', selector: 'ngx-sirio-dropdown', description: 'Menu dropdown' },
        { id: 'tab', name: 'Tab', selector: 'ngx-sirio-tab', description: 'Navigazione a tab' },
        { id: 'tab-bar', name: 'Tab Bar', selector: 'ngx-sirio-tab-bar', description: 'Tab bar mobile' },
        { id: 'chip', name: 'Chip', selector: 'ngx-sirio-chip', description: 'Chip interattivo' },
        { id: 'tag', name: 'Tag', selector: 'ngx-sirio-tag', description: 'Tag etichetta' },
        { id: 'tooltip', name: 'Tooltip', selector: 'ngx-sirio-tooltip', description: 'Tooltip informativo' },
        { id: 'searchbar', name: 'Searchbar', selector: 'ngx-sirio-searchbar', description: 'Barra di ricerca' },
        { id: 'carousel', name: 'Carousel', selector: 'ngx-sirio-carousel', description: 'Carosello immagini' },
        { id: 'title-bar', name: 'Title Bar', selector: 'ngx-sirio-title-bar', description: 'Barra titolo con azioni' },
      ]
    },
    {
      id: 'feedback', name: 'Feedback', icon: 'notifications', expanded: false,
      components: [
        { id: 'alert', name: 'Alert', selector: 'ngx-sirio-alert', description: 'Alert messaggi' },
        { id: 'notify', name: 'Notify', selector: 'ngx-sirio-notify', description: 'Notifiche' },
        { id: 'toast', name: 'Toast', selector: 'SirioToastService', description: 'Toast service' },
        { id: 'dialog', name: 'Dialog', selector: 'ngx-sirio-dialog', description: 'Dialog modale' },
        { id: 'progress-bar', name: 'Progress Bar', selector: 'ngx-sirio-progress-bar', description: 'Barra di progresso' },
        { id: 'stepper-progress-bar', name: 'Stepper Progress', selector: 'ngx-sirio-stepper-progress-bar', description: 'Stepper a passi' },
      ]
    }
  ];

  filteredCategories: CategoryMeta[] = [];

  constructor(private router: Router) {
    this.filteredCategories = this.categories;
    // Traccia la route attiva per highlight sidebar
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(e => {
      const match = e.urlAfterRedirects.match(/\/components\/(.+)/);
      this.activeComponentId = match ? match[1] : '';
    });
  }

  toggleCategory(catId: string) {
    const cat = this.categories.find(c => c.id === catId);
    if (cat) cat.expanded = !cat.expanded;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredCategories = this.categories;
      return;
    }
    this.filteredCategories = this.categories
      .map(cat => ({
        ...cat,
        expanded: true,
        components: cat.components.filter(c =>
          c.name.toLowerCase().includes(term) ||
          c.selector.toLowerCase().includes(term) ||
          c.description.toLowerCase().includes(term)
        )
      }))
      .filter(cat => cat.components.length > 0);
  }

  navigateTo(componentId: string) {
    this.router.navigate(['/components', componentId]);
    this.closeSidebar();
  }
}
