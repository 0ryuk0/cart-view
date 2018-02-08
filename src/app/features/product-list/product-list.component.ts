import { Component, OnInit, Output, EventEmitter, Pipe } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    isShowDetails: boolean;
    selectedProduct = {};
    filterArgs = [];
    subscription: Subscription;
    
    products =[
        {
            "productId" : "0001",
            "category" : "sports",
            "productTitle" : "BasketBall",
            "productDescription" : "Winners train,losers complain",	
            "images" : "assets/images/basketball.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["athletic feeling"],
            "userRatings" : "5",
            "price":"23.12  "
        },
        {
            "productId" : "0002",
            "category" : "clothing",
            "productTitle" : "Blazer",
            "productDescription" : "Defines your Class",
            "images" : "assets/images/blazer.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Fashion In",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["looks great"],
            "userRatings" : "4",
            "price":"23.12  "
        },
        {
            "productId" : "0003",
            "category" : "accessories",
            "productTitle" : "Watch",
            "productDescription" : "Have you ever worn a real watch?",
            "images" : "assets/images/watch.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["looks elegant"],
            "userRatings" : "4",
            "price":"40.12  "
        },
        {
            "productId" : "0004",
            "category" : "accessories",
            "productTitle" : "Perfume",
            "productDescription" : "Long Lasting Fragrance",
            "images" : "assets/images/perfume.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Allure In",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["smells good"],
            "userRatings" : "4",
            "price":"67.12  "
        },
        {
            "productId" : "0005",
            "category" : "accessories",
            "productTitle" : "Footwear",
            "productDescription" : "Free to be casual",
            "images" : "assets/images/footwear.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["light & durable"],
            "userRatings" : "4",
            "price":"78.23  "
        },
        {
            "productId" : "0006",
            "category" : "electronics",
            "productTitle" : "Laptop",
            "productDescription" : "Making technology work for you",
            "images" : "assets/images/laptop.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["very light"],
            "userRatings" : "4",
            "price":"230.12  "

        },
        {
            "productId" : "0007",
            "category" : "sports",
            "productTitle" : "Racket",
            "productDescription" : "Just hit it",
            "images" : "assets/images/racket.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["Nice stroke"],
            "userRatings" : "4",
            "price":"56.12  "
        },
        {
            "productId" : "0008",
            "category" : "grooming",
            "productTitle" : "Deodrant",
            "productDescription" : "Spray more. Get more",
            "images" : "assets/images/deodrant.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Allure In",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["lasts long"],
            "userRatings" : "4",
            "price":"45.90  "
            },
            {
            "productId" : "0009",
            "category" : "clothing",
            "productTitle" : "Denim",
            "productDescription" : "Fashion for the senses",
            "images" : "assets/images/denim.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Fashion Inn",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5",
            },
            "reviews" : ["casual look"],
            "userRatings" : "4",
            "price":"29.12  "
        },
        {
            "productId" : "0010",
            "category" : "electronics",
            "productTitle" : "Speakers",
            "productDescription" : "Stereo Sound Effect",
            "images" : "assets/images/speaker.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Hometheatre Feel"],
            "userRatings" : "4",
            "price":"2450.12  "
        },
        {
            "productId" : "0011",
            "category" : "clothing",
            "productTitle" : "Cotton Shirt",
            "productDescription" : "100 percent cotton",
            "images" : "assets/images/cottonShirt.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Fashion Inn",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Light feel"],
            "userRatings" : "4",
            "price":"678.12  "
        },
        {
            "productId" : "0012",
            "category" : "sports",
            "productTitle" : "Baseball bat",
            "productDescription" : "Baseball Soul",
            "images" : "assets/images/baseball.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Strong Hold"],
            "userRatings" : "4",
            "price":"79.12  "
        },
        {
            "productId" : "0013",
            "category" : "electronics",
            "productTitle" : "Smart TVs",
            "productDescription" : "Light-Smart LED",
            "images" : "assets/images/smart-tv.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Pleasant for eyes"],
            "userRatings" : "4",
            "price":"52.12  "
        },
        {
            "productId" : "0014",
            "category" : "clothing",
            "productTitle" : "Shorts",
            "productDescription" : "Feel the Comfort",
            "images" : "assets/images/shorts.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Fashion Inn",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Great Comfort"],
            "userRatings" : "4",
            "price":"36.12  "
        },
        {
            "productId" : "0015",
            "category" : "electronics",
            "productTitle" : "Smartphones",
            "productDescription" : "Keep your World Moving",
            "images" : "assets/images/smartphone.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["smooth screentouch"],
            "userRatings" : "4",
            "price":"487.12  "
        },
        {
            "productId" : "0016",
            "category" : "sports",
            "productTitle" : "Sports Shoes",
            "productDescription" : "Athletic shoes with spikes",
            "images" : "assets/images/sports.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Professional Sportsman Feel"],
            "userRatings" : "4",
            "price":"567.12  "
        },
        {
            "productId" : "0017",
            "category" : "accessories",
            "productTitle" : "Leather Shoes",
            "productDescription" : "Be your own label",
            "images" : "assets/images/leather.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Spot On",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Gentleman Stuff"],
            "userRatings" : "4",
            "price":"24.09  "
        },
        {
            "productId" : "0018",
            "category" : "grooming",
            "productTitle" : "Trimmer",
            "productDescription" : "From zero Trim to Full Beard",
            "images" : "assets/images/trimmer.png",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["stubble to full, all purpose"],
            "userRatings" : "4",
            "price":"23.12  "
        },
        {
            "productId" : "0019",
            "category" : "accessories",
            "productTitle" : "HeadPhones",
            "productDescription" : "Noise Cancellation HeadPhones",
            "images" : "assets/images/headphone.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Techno Inc",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["enjoy the music, gives you your own space"],
            "userRatings" : "4",
            "price":"349.12  "
        },
        {
            "productId" : "0020",
            "category" : "grooming",
            "productTitle" : "Hair Oil",
            "productDescription" : "A totally organic experience",
            "images" : "assets/images/hair.jpg",
            "manufacturedOn" : "02-07-2017",
            "manufacturedBy" : "Allure In",
            "sellerDetails" : {
                "id" : "1",
                "name" : "Srinath",
                "address" : "350 5th Avenue, New York, ",
                "branches" : "1", 
                "ratings" : "5"
            },
            "reviews" : ["Never let your scalp dry"],
            "userRatings":"4",
            "price":"23.12  "
    }];

    constructor(private _productService: ProductService, private _router: Router) {
        this.subscription = _productService.filterArgs$.subscribe((args) => {
            this.filterArgs = args;
            console.log('filter args:', args, this.filterArgs, this.subscription);
        });
    }

  ngOnInit() {
    this.getProductList();
    this._productService.showSidePane(true);
  }

  getProductList(){
    this._productService.getProductList()
      .subscribe((products) => {
        this.products = products;
      })
  };

  redirectToDetails(product){
    // this._router.navigate(['./details']);
    this.isShowDetails = true;
    this.selectedProduct = product;
  }

  detailModalEvents(event){
    if(event === 'close'){
        this.isShowDetails = false;
    }else{
        console.log(event);
        if(event){
            
        }
    }
  };

}
