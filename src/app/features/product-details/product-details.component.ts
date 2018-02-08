import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any;

  item = {};
  
  constructor(private _router: Router) {
    console.log('product-details', this.product);
    this.item = this.product;
   }

  ngOnInit() {
  }

  redirectTo(){
    this._router.navigate(['./products']);
  }

}
