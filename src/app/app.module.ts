import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';


const routes: Routes =[
  { path: 'ckeckout', component: CheckoutComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products-list', component: ProductsListComponent},
  { path: 'update-product/:id' , component: ProductUpdateComponent},
  { path: 'categories', component: CategoriesListComponent },
  { path: 'add-category', component: CategoryAddComponent},
  { path: 'update-category/:id', component: CategoryUpdateComponent},
  { path: 'customers', component: CustomersListComponent },
  { path: 'update-customer/:id', component: CustomerUpdateComponent},
  { path: '', redirectTo: '/products', pathMatch:'full'  },
  { path: '**', redirectTo: '/products', pathMatch:'full'  },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    ProductsListComponent,
    CategoriesListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductUpdateComponent,
    CustomersListComponent,
    CustomerUpdateComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
