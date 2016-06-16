import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { FianceData } from "../models/fiance-data";

@Injectable()
export class FianceDataService {
  constructor (private http: Http) {}

  private fianceDataUrl = '../app/services/fiance-data.json';

  getFianceData (): Observable<FianceData> {
    return this.http.get(this.fianceDataUrl)
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
