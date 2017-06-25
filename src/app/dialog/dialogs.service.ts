import { Observable } from 'rxjs/Rx';
import { AddClientDialog } from '../clients/client-dialog/add-client-dialog.component';
import { AddProductDialog } from '../products/product-dialog/add-product-dialog.component';
import { CreateListDialog } from '../orders/list-dialog/create-list-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public addClient(): Observable<boolean> {

        let dialogRef: MdDialogRef<AddClientDialog>;

        dialogRef = this.dialog.open(AddClientDialog, {
            height: '30%',
            width: '40%'
        });

        return dialogRef.afterClosed();
    }

    public addProduct(): Observable<boolean> {

        let dialogRef: MdDialogRef<AddProductDialog>;

        dialogRef = this.dialog.open(AddProductDialog, {
            height: '30%',
            width: '40%'
        });

        return dialogRef.afterClosed();
    }

    public createList(): Observable<boolean> {

        let dialogRef: MdDialogRef<CreateListDialog>;

        dialogRef = this.dialog.open(CreateListDialog, {
            height: '95%',
            width: '80%'
        });

        return dialogRef.afterClosed();
    }
}
