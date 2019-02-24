import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ViewCartComponent } from './cart/view-cart.component';
import { CartItemComponent } from './cart/cart-item.component';
import { ServicesComponent } from './services/services.component';
import { LocationComponent } from './location/location.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CookBookComponent } from './cook-book/cook-book.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ViewCartComponent,
    CartItemComponent,
    ServicesComponent,
    LocationComponent,
    TestimonialsComponent,
    CookBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'location', component: LocationComponent},
      {path: 'cookbook', component: CookBookComponent},
      {path: 'testimonials', component: TestimonialsComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**',  redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
