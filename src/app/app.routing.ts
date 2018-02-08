import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'products', component: ProductListComponent }
]

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
