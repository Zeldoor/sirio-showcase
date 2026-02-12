import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// Form demos
import { ButtonDemoComponent } from './demos/form/button-demo.component';
import { InputDemoComponent } from './demos/form/input-demo.component';
import { AutocompleteDemoComponent } from './demos/form/autocomplete-demo.component';
import { SelectDemoComponent } from './demos/form/select-demo.component';
import { SliderDemoComponent } from './demos/form/slider-demo.component';
import { CheckboxDemoComponent } from './demos/form/checkbox-demo.component';
import { CheckboxGroupDemoComponent } from './demos/form/checkbox-group-demo.component';
import { RadioButtonDemoComponent } from './demos/form/radio-button-demo.component';
import { RadioGroupDemoComponent } from './demos/form/radio-group-demo.component';
import { ToggleDemoComponent } from './demos/form/toggle-demo.component';
import { DatepickerDemoComponent } from './demos/form/datepicker-demo.component';
import { RangepickerDemoComponent } from './demos/form/rangepicker-demo.component';
import { TimepickerDemoComponent } from './demos/form/timepicker-demo.component';
import { FileUploadDemoComponent } from './demos/form/file-upload-demo.component';
import { InputChipDemoComponent } from './demos/form/input-chip-demo.component';
import { ChipRadioGroupDemoComponent } from './demos/form/chip-radio-group-demo.component';
import { ChipCheckboxGroupDemoComponent } from './demos/form/chip-checkbox-group-demo.component';

// Layout demos
import { HeaderDemoComponent } from './demos/layout/header-demo.component';
import { FooterDemoComponent } from './demos/layout/footer-demo.component';
import { SidenavDemoComponent } from './demos/layout/sidenav-demo.component';
import { SidenavMobileDemoComponent } from './demos/layout/sidenav-mobile-demo.component';
import { BreadcrumbDemoComponent } from './demos/layout/breadcrumb-demo.component';

// Container demos
import { CardDemoComponent } from './demos/containers/card-demo.component';
import { ExpandableContainerDemoComponent } from './demos/containers/expandable-container-demo.component';
import { AccordionDemoComponent } from './demos/containers/accordion-demo.component';
import { CollapseDemoComponent } from './demos/containers/collapse-demo.component';
import { HeroDemoComponent } from './demos/containers/hero-demo.component';

// Table demos
import { TableDemoComponent } from './demos/tables/table-demo.component';
import { TableBuilderDemoComponent } from './demos/tables/table-builder-demo.component';
import { PaginatorDemoComponent } from './demos/tables/paginator-demo.component';

// Interaction demos
import { DropdownDemoComponent } from './demos/interaction/dropdown-demo.component';
import { TabDemoComponent } from './demos/interaction/tab-demo.component';
import { TabBarDemoComponent } from './demos/interaction/tab-bar-demo.component';
import { ChipDemoComponent } from './demos/interaction/chip-demo.component';
import { TagDemoComponent } from './demos/interaction/tag-demo.component';
import { TooltipDemoComponent } from './demos/interaction/tooltip-demo.component';
import { SearchbarDemoComponent } from './demos/interaction/searchbar-demo.component';
import { CarouselDemoComponent } from './demos/interaction/carousel-demo.component';
import { TitleBarDemoComponent } from './demos/interaction/title-bar-demo.component';
import { StepperDemoComponent } from './demos/interaction/stepper-demo.component';
import { LinkDemoComponent } from './demos/interaction/link-demo.component';
import { BadgeDemoComponent } from './demos/interaction/badge-demo.component';

// Feedback demos
import { AlertDemoComponent } from './demos/feedback/alert-demo.component';
import { NotifyDemoComponent } from './demos/feedback/notify-demo.component';
import { ToastDemoComponent } from './demos/feedback/toast-demo.component';
import { DialogDemoComponent } from './demos/feedback/dialog-demo.component';
import { ProgressBarDemoComponent } from './demos/feedback/progress-bar-demo.component';
import { StepperProgressBarDemoComponent } from './demos/feedback/stepper-progress-bar-demo.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // Form
    { path: 'components/button', component: ButtonDemoComponent },
    { path: 'components/input', component: InputDemoComponent },
    { path: 'components/autocomplete', component: AutocompleteDemoComponent },
    { path: 'components/select', component: SelectDemoComponent },
    { path: 'components/slider', component: SliderDemoComponent },
    { path: 'components/checkbox', component: CheckboxDemoComponent },
    { path: 'components/checkbox-group', component: CheckboxGroupDemoComponent },
    { path: 'components/radio-button', component: RadioButtonDemoComponent },
    { path: 'components/radio-group', component: RadioGroupDemoComponent },
    { path: 'components/toggle', component: ToggleDemoComponent },
    { path: 'components/datepicker', component: DatepickerDemoComponent },
    { path: 'components/rangepicker', component: RangepickerDemoComponent },
    { path: 'components/timepicker', component: TimepickerDemoComponent },
    { path: 'components/file-upload', component: FileUploadDemoComponent },
    { path: 'components/input-chip', component: InputChipDemoComponent },
    { path: 'components/chip-radio-group', component: ChipRadioGroupDemoComponent },
    { path: 'components/chip-checkbox-group', component: ChipCheckboxGroupDemoComponent },
    // Layout
    { path: 'components/sirio-header', component: HeaderDemoComponent },
    { path: 'components/sirio-footer', component: FooterDemoComponent },
    { path: 'components/sidenav', component: SidenavDemoComponent },
    { path: 'components/sidenav-mobile', component: SidenavMobileDemoComponent },
    { path: 'components/breadcrumb', component: BreadcrumbDemoComponent },
    // Containers
    { path: 'components/card', component: CardDemoComponent },
    { path: 'components/expandable-container', component: ExpandableContainerDemoComponent },
    { path: 'components/accordion', component: AccordionDemoComponent },
    { path: 'components/collapse', component: CollapseDemoComponent },
    { path: 'components/hero', component: HeroDemoComponent },
    // Tables
    { path: 'components/table', component: TableDemoComponent },
    { path: 'components/table-builder', component: TableBuilderDemoComponent },
    { path: 'components/paginator', component: PaginatorDemoComponent },
    // Interaction
    { path: 'components/dropdown', component: DropdownDemoComponent },
    { path: 'components/tab', component: TabDemoComponent },
    { path: 'components/tab-bar', component: TabBarDemoComponent },
    { path: 'components/chip', component: ChipDemoComponent },
    { path: 'components/tag', component: TagDemoComponent },
    { path: 'components/tooltip', component: TooltipDemoComponent },
    { path: 'components/searchbar', component: SearchbarDemoComponent },
    { path: 'components/carousel', component: CarouselDemoComponent },
    { path: 'components/title-bar', component: TitleBarDemoComponent },
    { path: 'components/stepper', component: StepperDemoComponent },
    { path: 'components/link', component: LinkDemoComponent },
    { path: 'components/badge', component: BadgeDemoComponent },
    // Feedback
    { path: 'components/alert', component: AlertDemoComponent },
    { path: 'components/notify', component: NotifyDemoComponent },
    { path: 'components/toast', component: ToastDemoComponent },
    { path: 'components/dialog', component: DialogDemoComponent },
    { path: 'components/progress-bar', component: ProgressBarDemoComponent },
    { path: 'components/stepper-progress-bar', component: StepperProgressBarDemoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
