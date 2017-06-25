import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { ProductService } from '../../products/shared/product.service';
import { ClientService } from '../../clients/shared/client.service';
import { OrderService } from '../shared/order.service';
import { Product } from '../../products/shared/product';
import { Client } from '../../clients/shared/client';
import { List } from '../shared/list';


// TODO: Finish.

@Component({
    selector: 'create-list-dialog',
    templateUrl: './create-list-dialog.html',
    styleUrls: ['./create-list-dialog.scss'],
    providers: [ProductService, ClientService, OrderService]
})
export class CreateListDialog implements OnInit {

    products: any[];
    clients: Client[];
    listClients: Client[];
    clientCtrl: FormControl;
    filteredClients: any;
    list: any;
    selClient: any;
    date: any;

    constructor(public dialogRef: MdDialogRef<CreateListDialog>,
        private productService: ProductService,
        private clientService: ClientService,
        private orderService: OrderService) {

        this.clients = [];
        this.selClient = "";
        this.list = { products: [] };
        this.listClients = [];
        this.clientCtrl = new FormControl();
        this.filteredClients = this.clientCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterClients(name));
    }

    ngOnInit() {
        this.getProduct();
        this.getClients();
    }

    filterClients(val: any) {
        return val ? this.clients.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.clients;
    }

    getClients() {
        this.clientService.getClientList().subscribe(response => {
            this.clients = response;
        });
    }

    getProduct() {
        this.productService.getProductList().subscribe(resp => this.products = resp);
    }

    AddList() {
        this.orderService.addList(this.list).subscribe();
        this.dialogRef.close();
    }

    selectProduct(product) {
        product.sel = !product.sel;
    }

    updateProduct(product) {
        if (product.qtd <= 0 || product.qtd == null) {
            product.qtd = 0;
        }
        if (product.price <= 0 || product.price == null) {
            product.price = 0;
        }
        product.total = product.qtd * product.price;
        this.manageList();
    }

    manageList() {
        this.list.client = { name: this.selClient };
        this.list.deliveryDate = this.date;
        this.list.products = [];
        this.list.total = 0;
        for (let product of this.products) {
            if (product.sel && product.sel === true) {
                this.list.products.push(product);
                this.list.total += product.total;
            }
        }
        console.log(this.list);
    }



}
