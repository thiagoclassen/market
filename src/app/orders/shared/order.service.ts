import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';
import { List } from './list';

@Injectable()
export class OrderService {

    link = 'http://localhost:3000';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getOrderList(): Observable<Order[]> {
        return this.http.get(this.link + '/orders')
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    addOrder(order: Order) {
        return this.http.post(this.link + '/orders', order, this.options)
            .map((response) => console.log(response))
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    getLists(): Observable<List[]> {
        return this.http.get(this.link + '/lists')
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    addList(list: List) {
        return this.http.post(this.link + '/lists', list, this.options)
            .map((response) => console.log(response))
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

}
