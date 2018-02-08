import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HeaderComponent } from '../shared/header/header.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {

  private cartCountSource = new Subject<any>();
  cartCount$ = this.cartCountSource.asObservable();

  private showSideBar = new Subject<any>();
  showSideBar$ = this.showSideBar.asObservable();

  private cart = [];

  private filterArgs = new Subject<any>();
  filterArgs$ = this.filterArgs.asObservable();

  constructor(private _http: Http) { }

  public getProductList(){
    return this._http.get('app/core/mock-data/product-list.json')
      .map((res: Response) => {
        res.json()
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  };

  set cartMetadata(data){
    if(data){
      this.cart.push(data);
      this.cartCountSource.next(this.cart);
    }
  };

  get cartMetaData(){
    return this.cart;
  };

  showSidePane(isPane){
    this.showSideBar.next(isPane);
  };

  set filterArgArray(arr){
    this.filterArgs.next(arr);
  }

}
