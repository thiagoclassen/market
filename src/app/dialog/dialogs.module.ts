import { DialogsService } from './dialogs.service';
import { MaterialModule } from '@angular/material';
import { MyMaterialModule } from '../my-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddClientDialog } from '../clients/client-dialog/add-client-dialog.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        MyMaterialModule,
        FlexLayoutModule,
        FormsModule
    ],
    exports: [
        AddClientDialog,
    ],
    declarations: [
        AddClientDialog,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        AddClientDialog,
    ],
})
export class DialogsModule { }
