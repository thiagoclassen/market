import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule,
  MdAutocompleteModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdAutocompleteModule,
    MdInputModule]
})
export class MaterialModule { }
