import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition, AfterViewInit } from '@angular/core';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('dialog', [
      style({ transform: 'scale3d(.3, .3, .3)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)'}))
    ])
  ]

})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() data: any;

  @Output() dialogEvents: EventEmitter<any> = new EventEmitter<any>();
  
  headerText = 'Product Details';

  constructor(private _productService: ProductService) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  close(){
    // this.reset();
    this.visible = false;
    this.dialogEvents.next('close');
  };

  addToCart(){
    console.log(this.data);
    this._productService.cartMetadata = this.data;
    this.dialogEvents.next(this._productService.cartMetaData);
    this.close();
  }

}
