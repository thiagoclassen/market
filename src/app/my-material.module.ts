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
  MdDialogModule
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
    MdDialogModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule]
})
export class MyMaterialModule { }
