import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class HttpHelperService {
  
  constructor(private http: Http) { 
  }

  public getCall(url: string): Observable<any> {
    return this.http.get(url)
      .map(resp => {
        if (resp && resp.json) {
          return resp.json()
        }
        else {
          return resp;
        }
      })
      .catch(this.handleError);
  }

private handleError (error: any) {
    try {
      let err: any = {};
      err.message = (error && error.json() && error.json().message) ? error.json().message :
        error.status ? `${error.status} - ${error.statusText}` : 'Sorry! Something went wrong';

      err.code = (error && error.json() && error.json().code) ? error.json().code : '';

      return Observable.throw(err);
    } catch (error) {
      return Observable.throw({ "message": "Sorry! Something went wrong" });
    }
}

}