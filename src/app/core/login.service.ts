import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  
  constructor(private _http: Http) { }

  public getAuth(params){
    // return this._http.post('cdslc', params)
    //   .map((res: Response) => {
    //     res.json()
    //   })
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  };

}
