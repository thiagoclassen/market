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
    this.orderService.getOrderList().subscribe(response => {
      this.orders = response;
    });
    this.orderService.getLists().subscribe(response => {
      this.lists = response;
    });
  }

  filterOrders(val: any) {
    return val ? this.orders.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.orders;
  }

  public createListDialog() {
    this.dialogService
      .createList()
      .subscribe(res => this.orderService.getLists().subscribe(response => {
        this.lists = response;
      }));
  }

}
