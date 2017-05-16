
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client';


@Component({
    selector: 'add-client-dialog',
    templateUrl: './add-client-dialog.html',
    styleUrls: ['./add-client-dialog.scss'],
    providers: [ClientService]
})
export class AddClientDialog {

    public name: string;

    constructor(public dialogRef: MdDialogRef<AddClientDialog>, private clientService: ClientService) { }

    public AddClient() {
        const client = new Client(this.name);
        this.clientService.addClient(client).subscribe();
        this.dialogRef.close(client);
    }

}
