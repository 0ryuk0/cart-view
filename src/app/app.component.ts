import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './core/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-comm Prototype';
  filterObj = [];
  filter = {}

  constructor(private _router: Router, private _productService: ProductService){};

  toggleNav() {
    if(document.getElementById("mySidenav").style.width == "250px" ){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }else{
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    } 
  };

  toggleFilter(){
    if(document.getElementById("filter-accordian").style.height == "auto" ){
      document.getElementById("filter-accordian").style.height = "0";
      document.getElementById("filter-accordian").style.marginTop = "-100vh";
    }else{
      document.getElementById("filter-accordian").style.height = "auto";
      document.getElementById("filter-accordian").style.marginTop = "10px";
    } 
  };

  filterWith(key, active){
    console.log(key, this.filterObj.indexOf(key));
    if(this.filterObj.indexOf(key) === -1){
      this.filterObj.push(key);
      this.filter[active] = true;
    }else{
      this.filterObj.splice(this.filterObj.indexOf(key), 1);
      this.filter[active] = false;
    }
    console.log(this.filterObj);
    this._productService.filterArgArray = this.filterObj;
  };

}
