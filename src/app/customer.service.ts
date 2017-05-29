import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response, ResponseType } from '@angular/http';
import { Customer } from './models/customer.model';
@Injectable()
export class CustomerService {

  constructor(public http: Http) { }
  url = "";

  insertIntoDb(customer: Customer): Observable<Customer[]> {
    let body = JSON.stringify(customer);
    return this.http.post(this.url, body)
                    .map((x:Response)=>x.json());
                   // .catch((error:any)=>Observable.throw(error.json().error))
                 
  }

}
