import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';

@Injectable()
export class ClientService {
    link = 'http://localhost:3000/clients';

    constructor(private http: Http) { }

    getClientList(): Observable<Client[]> {
        return this.http.get(this.link)
            .map((response: Response) => response.json());
    }

}
