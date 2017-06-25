import { DialogsService } from './dialogs.service';
import { MaterialModule } from '@angular/material';
import { MyMaterialModule } from '../my-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddClientDialog } from '../clients/client-dialog/add-client-dialog.component';
import { AddProductDialog } from '../products/product-dialog/add-product-dialog.component';
import { CreateListDialog } from '../orders/list-dialog/create-list-dialog.component';


@NgModule({
    imports: [
        MaterialModule,
        MyMaterialModule,
        FlexLayoutModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    exports: [
        AddClientDialog,
        AddProductDialog,
        CreateListDialog
    ],
    declarations: [
        AddClientDialog,
        AddProductDialog,
        CreateListDialog
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        AddClientDialog,
        AddProductDialog,
        CreateListDialog
    ],
})
export class DialogsModule { }
