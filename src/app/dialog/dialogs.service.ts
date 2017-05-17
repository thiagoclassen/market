import { Observable } from 'rxjs/Rx';
import { AddClientDialog } from '../clients/client-dialog/add-client-dialog.component';
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
}
