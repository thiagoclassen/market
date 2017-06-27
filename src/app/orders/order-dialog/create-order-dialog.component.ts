import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { OrderService } from '../shared/order.service';
import { List } from '../shared/list';


// TODO: Finish.

@Component({
    selector: 'create-order-dialog',
    templateUrl: './create-order-dialog.html',
    styleUrls: ['./create-order-dialog.scss'],
    providers: [OrderService]
})
export class CreateOrderDialog implements OnInit {

    lists: any;
    order: any;

    constructor(public dialogRef: MdDialogRef<CreateOrderDialog>,
        private orderService: OrderService) {

    }

    ngOnInit() {
        this.getLists();
    }

    getLists() {
        this.orderService.getLists().subscribe(resp => this.lists = resp);
    }

    addOrder() {
        this.orderService.addOrder(this.order).subscribe();
        this.dialogRef.close();
    }

    selectList(list) {
        list.sel = !list.sel;
        this.updateList();
    }

    updateList() {
        // this.order.deliveryDate = this.date;
        this.order = {
            lists: [],
            total: 0,
            deliveryDate: new Date()
        };
        for (let list of this.lists) {
            if (list.sel && list.sel === true) {
                this.order.lists.push(list);
                this.order.total += list.total;
            }
        }
    }
}
