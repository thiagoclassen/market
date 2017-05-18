import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';

@Injectable()
export class OrderService {

    link = 'http://localhost:3000/orders';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getOrderList(): Observable<Order[]> {
        return this.http.get(this.link)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addOrder(order: Order) {
        return this.http.post(this.link, order, this.options)
            .map((response) => console.log(response))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
