import { Component, OnInit } from '@angular/core';
import { Client } from './shared/client';
import { ClientService } from './shared/client.service';
import { FormControl } from '@angular/forms';
import { DialogsService } from '../dialog/dialogs.service';
import { SearchPipe } from '../shared/search.pipe';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-clients',
  providers: [ClientService],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  listClients: Client[];
  clientCtrl: FormControl;
  filteredClients: any;

  constructor(private clientService: ClientService, private dialogService: DialogsService) {
    this.clients = [];
    this.listClients = [];
    this.clientCtrl = new FormControl();
    this.filteredClients = this.clientCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterClients(name));
  }

  ngOnInit() {
    this.clientService.getClientList().subscribe(response => {
      this.clients = response;
    });
  }

  filterClients(val: any) {
    return val ? this.clients.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.clients;
  }

  public openDialog() {
    this.dialogService
      .addClient()
      .subscribe(res => console.log(res));
  }

}
