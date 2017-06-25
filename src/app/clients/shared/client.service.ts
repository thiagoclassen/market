import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';

@Injectable()
export class ClientService {

    link = 'http://localhost:3000/clients';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getClientList(): Observable<Client[]> {
        return this.http.get(this.link)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    addClient(client: Client) {
        return this.http.post(this.link, client, this.options)
            .map((response) => console.log(response))
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

}
