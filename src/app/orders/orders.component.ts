import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from './shared/order';
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
  listOrders: Order[];
  orderCtrl: FormControl;
  filteredOrders: any;

  constructor(private orderService: OrderService, private dialogService: DialogsService) {
    this.orders = [];
    this.listOrders = [];
    this.orderCtrl = new FormControl();
    this.filteredOrders = this.orderCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterOrders(name));
  }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(response => {
      this.orders = response;
    });
  }

  filterOrders(val: any) {
    return val ? this.orders.filter(s => new RegExp(`^${val}`, 'gi').test(s.name)) : this.orders;
  }

  public openDialog() {
    this.dialogService
      .addClient()
      .subscribe(res => console.log(res));
  }

}
