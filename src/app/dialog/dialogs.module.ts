import { DialogsService } from './dialogs.service';
import { MaterialModule } from '@angular/material';
import { MyMaterialModule } from '../my-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddClientDialog } from '../clients/client-dialog/add-client-dialog.component';
import { AddProductDialog } from '../products/product-dialog/add-product-dialog.component';


@NgModule({
    imports: [
        MaterialModule,
        MyMaterialModule,
        FlexLayoutModule,
        FormsModule
    ],
    exports: [
        AddClientDialog,
        AddProductDialog
    ],
    declarations: [
        AddClientDialog,
        AddProductDialog
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        AddClientDialog,
        AddProductDialog
    ],
})
export class DialogsModule { }
