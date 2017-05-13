import { Component, OnInit } from '@angular/core';
import { Client } from './shared/client';
import { ClientService } from './shared/client.service';
import { FormControl } from '@angular/forms';
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
  clientCtrl: FormControl;
  filteredClients: any;

  constructor(private clientService: ClientService) {
    this.clients = [];
    this.clientCtrl = new FormControl();
    this.filteredClients = this.clientCtrl.valueChanges
      .startWith([])
      .map(name => this.filterClients(name));
  }

  ngOnInit() {
    this.clientService.getClientList().subscribe(response => this.clients = response);
  }

  filterClients(val: any) {
    return val ? this.clients.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.clients;
  }

}
