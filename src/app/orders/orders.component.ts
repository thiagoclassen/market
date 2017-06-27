import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from './shared/order';
import { List } from './shared/list';
import { OrderService } from './shared/order.service';
import { FormControl } from '@angular/forms';
import { DialogsService } from '../dialog/dialogs.service';
import { SearchPipe } from '../shared/search.pipe';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrderService],
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  orderCtrl: FormControl;
  filteredOrders: any;

  lists: List[];

  constructor(private orderService: OrderService, private dialogService: DialogsService) {
    this.lists = [];
    this.orders = [];
    this.orderCtrl = new FormControl();
    this.filteredOrders = this.orderCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterOrders(name));
  }

  ngOnInit() {
    this.getOrders();
    this.getLists();
  }

  getOrders() {
    this.orderService.getOrderList().subscribe(response => {
      this.orders = response;
    });
  }

  getLists() {
    this.orderService.getLists().subscribe(response => {
      this.lists = response;
    });
  }

  filterOrders(val: any) {
    return val ? this.lists.filter(s => new RegExp(`^${val}`, 'gi').test(s.client.name)) : this.lists;
  }

  createListDialog() {
    this.dialogService
      .createList()
      .subscribe(res => this.getLists());
  }

  createOrderDialog() {
    this.dialogService
      .createOrder()
      .subscribe(res => this.getOrders());
  }

}
