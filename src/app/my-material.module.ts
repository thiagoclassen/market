import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule,
  MdAutocompleteModule,
  MdInputModule,
  MdDialogModule,
  MdTabsModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule,
    MdTabsModule,
    MdDatepickerModule,
    MdNativeDateModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule,
    MdTabsModule,
    MdDatepickerModule,
    MdNativeDateModule]
})
export class MyMaterialModule { }
