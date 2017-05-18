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
  MdTabsModule
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
    MdTabsModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule,
    MdTabsModule]
})
export class MyMaterialModule { }
