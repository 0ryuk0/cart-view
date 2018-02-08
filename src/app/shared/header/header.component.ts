import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartCount = 0;
  cartDataList = [];
  isShowCartList: boolean;
  cartValue = 0;
  isShowHamIcon: boolean;

  title = "E-Commerce Prototype";
  subscription: Subscription;
  subscription1: Subscription;

  constructor(private _productService: ProductService) {
    // this.cartCount = _productService.cartMetaData.length;
    this.subscription = _productService.cartCount$.subscribe((cartMeta) => {
      console.log('in header:', cartMeta);
      if(cartMeta){
        this.cartDataList = cartMeta;
        this.cartCount = cartMeta.length;
        for(let i=0; i < cartMeta.length; i++){
          this.cartValue += parseInt(cartMeta[i].price);
        }
      }
    });

    this.subscription1 = _productService.showSideBar$.subscribe((isShow) => {
      console.log('in header:', isShow);
      this.isShowHamIcon = isShow;
    });
  };

  ngOnInit() {
  };

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  };

  toggleCartDetails(e){
    e.stopPropagation();
    if(this.cartCount > 0){
      this.isShowCartList = !this.isShowCartList;
    }
  };

  onClick(event) {
    this.isShowCartList = false;
  };

}
