import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/login/login.component';
import { AppRouting } from './app.routing';
import { ProductService } from './core/product.service';
import { HttpModule } from '@angular/http';
import { ProductCarouselComponent } from './shared/carousel/product-carousel.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginService } from './core/login.service';
import { ProductFilter } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoginComponent,
    ProductCarouselComponent,
    ModalComponent,
    CartComponent,
    ProductFilter
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
