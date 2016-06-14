import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import { Account } from "../models/account";

@Injectable()
export class AccountService {
  constructor (private http: Http) {}

  private accountsUrl = '../app/services/accounts.json';

  getAccounts (): Observable<Account[]> {
    return this.http.get(this.accountsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
