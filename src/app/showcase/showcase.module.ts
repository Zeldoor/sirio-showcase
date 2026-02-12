import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowcaseRoutingModule } from './showcase-routing.module';

// ─── Sirio Library Components ────────────────────────────
import {
    SirioButtonComponent,
    SirioInputComponent,
    SirioAutocompleteComponent, SirioAutocompletePanelComponent, SirioAutocompleteOptionComponent,
    SirioSelectComponent, SirioSelectPanelComponent, SirioSelectOptionComponent,
    SirioSliderComponent,
    SirioCheckboxComponent,
    SirioCheckboxGroupComponent,
    SirioRadioButtonComponent,
    SirioRadioGroupComponent,
    SirioToggleComponent,
    SirioDatepickerComponent,
    SirioRangepickerComponent, SirioRangepickerInputComponent,
    SirioTimepickerComponent,
    SirioFileUploadComponent,
    SirioInputChipComponent,
    SirioChipRadioGroupComponent,
    SirioChipCheckboxGroupComponent,
    SirioHeaderComponent,
    SirioFooterComponent,
    SirioSidenavComponent, SirioSidenavItemComponent,
    SirioSidenavMobileComponent,
    SirioBreadcrumbComponent, SirioBreadcrumbItemComponent,
    SirioCardComponent, SirioCardHeaderComponent, SirioCardBodyComponent, SirioCardTitleComponent, SirioCardTextComponent,
    SirioExpandableContainerComponent,
    SirioAccordionComponent, SirioAccordionPanelComponent, SirioAccordionHeaderComponent, SirioAccordionBodyComponent,
    SirioCollapseComponent, SirioCollapseTriggerDirective,
    SirioHeroComponent,
    SirioTableComponent,
    SirioTableModule,
    SirioPaginatorComponent,
    SirioDropdownComponent, SirioDropdownPanelComponent, SirioDropdownOptionComponent,
    SirioTabComponent, SirioTabItemComponent, SirioTabNavComponent, SirioTabNavItemComponent,
    SirioTabBarComponent, SirioTabBarElementComponent,
    SirioChipComponent,
    SirioTagComponent,
    SirioTooltipDirective,
    SirioSearchbarComponent,
    SirioCarouselComponent, SirioCarouselElementComponent,
    SirioTitleBarComponent,
    SirioAlertComponent,
    SirioAlertMessageComponent,
    SirioNotifyComponent,
    SirioDialogComponent,
    SirioProgressBarComponent,
    SirioStepperProgressBarComponent, SirioStepperProgressItemComponent,
} from 'ngx-sirio-lib';

// ─── Demo Components ─────────────────────────────────────
import { HomeComponent } from './home/home.component';

// Form
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

// Layout
import { HeaderDemoComponent } from './demos/layout/header-demo.component';
import { FooterDemoComponent } from './demos/layout/footer-demo.component';
import { SidenavDemoComponent } from './demos/layout/sidenav-demo.component';
import { SidenavMobileDemoComponent } from './demos/layout/sidenav-mobile-demo.component';
import { BreadcrumbDemoComponent } from './demos/layout/breadcrumb-demo.component';

// Containers
import { CardDemoComponent } from './demos/containers/card-demo.component';
import { ExpandableContainerDemoComponent } from './demos/containers/expandable-container-demo.component';
import { AccordionDemoComponent } from './demos/containers/accordion-demo.component';
import { CollapseDemoComponent } from './demos/containers/collapse-demo.component';
import { HeroDemoComponent } from './demos/containers/hero-demo.component';

// Tables
import { TableDemoComponent } from './demos/tables/table-demo.component';
import { TableBuilderDemoComponent } from './demos/tables/table-builder-demo.component';
import { PaginatorDemoComponent } from './demos/tables/paginator-demo.component';

// Interaction
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

// Feedback
import { AlertDemoComponent } from './demos/feedback/alert-demo.component';
import { NotifyDemoComponent } from './demos/feedback/notify-demo.component';
import { ToastDemoComponent } from './demos/feedback/toast-demo.component';
import { DialogDemoComponent } from './demos/feedback/dialog-demo.component';
import { ProgressBarDemoComponent } from './demos/feedback/progress-bar-demo.component';
import { StepperProgressBarDemoComponent } from './demos/feedback/stepper-progress-bar-demo.component';

@NgModule({
    declarations: [
        HomeComponent,
        // Form
        ButtonDemoComponent,
        InputDemoComponent,
        AutocompleteDemoComponent,
        SelectDemoComponent,
        SliderDemoComponent,
        CheckboxDemoComponent,
        CheckboxGroupDemoComponent,
        RadioButtonDemoComponent,
        RadioGroupDemoComponent,
        ToggleDemoComponent,
        DatepickerDemoComponent,
        RangepickerDemoComponent,
        TimepickerDemoComponent,
        FileUploadDemoComponent,
        InputChipDemoComponent,
        ChipRadioGroupDemoComponent,
        ChipCheckboxGroupDemoComponent,
        // Layout
        HeaderDemoComponent,
        FooterDemoComponent,
        SidenavDemoComponent,
        SidenavMobileDemoComponent,
        BreadcrumbDemoComponent,
        // Containers
        CardDemoComponent,
        ExpandableContainerDemoComponent,
        AccordionDemoComponent,
        CollapseDemoComponent,
        HeroDemoComponent,
        // Tables
        TableDemoComponent,
        TableBuilderDemoComponent,
        PaginatorDemoComponent,
        // Interaction
        DropdownDemoComponent,
        TabDemoComponent,
        TabBarDemoComponent,
        ChipDemoComponent,
        TagDemoComponent,
        TooltipDemoComponent,
        SearchbarDemoComponent,
        CarouselDemoComponent,
        TitleBarDemoComponent,
        StepperDemoComponent,
        LinkDemoComponent,
        BadgeDemoComponent,
        // Feedback
        AlertDemoComponent,
        NotifyDemoComponent,
        ToastDemoComponent,
        DialogDemoComponent,
        ProgressBarDemoComponent,
        StepperProgressBarDemoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShowcaseRoutingModule,
        // Sirio standalone components
        SirioButtonComponent,
        SirioInputComponent,
        SirioAutocompleteComponent,
        SirioAutocompletePanelComponent,
        SirioAutocompleteOptionComponent,
        SirioSelectComponent,
        SirioSelectPanelComponent,
        SirioSelectOptionComponent,
        SirioSliderComponent,
        SirioCheckboxComponent,
        SirioCheckboxGroupComponent,
        SirioRadioButtonComponent,
        SirioRadioGroupComponent,
        SirioToggleComponent,
        SirioDatepickerComponent,
        SirioRangepickerComponent,
        SirioRangepickerInputComponent,
        SirioTimepickerComponent,
        SirioFileUploadComponent,
        SirioInputChipComponent,
        SirioChipRadioGroupComponent,
        SirioChipCheckboxGroupComponent,
        SirioHeaderComponent,
        SirioFooterComponent,
        SirioSidenavComponent,
        SirioSidenavItemComponent,
        SirioSidenavMobileComponent,
        SirioBreadcrumbComponent,
        SirioBreadcrumbItemComponent,
        SirioCardComponent,
        SirioCardHeaderComponent,
        SirioCardBodyComponent,
        SirioCardTitleComponent,
        SirioCardTextComponent,
        SirioExpandableContainerComponent,
        SirioAccordionComponent,
        SirioAccordionPanelComponent,
        SirioAccordionHeaderComponent,
        SirioAccordionBodyComponent,
        SirioCollapseComponent,
        SirioCollapseTriggerDirective,
        SirioHeroComponent,
        SirioTableComponent,
        SirioTableModule,
        SirioPaginatorComponent,
        SirioDropdownComponent,
        SirioDropdownPanelComponent,
        SirioDropdownOptionComponent,
        SirioTabComponent,
        SirioTabItemComponent,
        SirioTabNavComponent,
        SirioTabNavItemComponent,
        SirioTabBarComponent,
        SirioTabBarElementComponent,
        SirioChipComponent,
        SirioTagComponent,
        SirioTooltipDirective,
        SirioSearchbarComponent,
        SirioCarouselComponent,
        SirioCarouselElementComponent,
        SirioTitleBarComponent,
        SirioAlertComponent,
        SirioAlertMessageComponent,
        SirioNotifyComponent,
        SirioDialogComponent,
        SirioProgressBarComponent,
        SirioStepperProgressBarComponent,
        SirioStepperProgressItemComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowcaseModule { }
