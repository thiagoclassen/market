import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {

    link = 'http://localhost:3000/products';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getProductList(): Observable<Product[]> {
        return this.http.get(this.link)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addProduct(product: Product) {
        return this.http.post(this.link, product, this.options)
            .map((response) => console.log(response))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
