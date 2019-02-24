import { Component, OnInit } from '@angular/core';
import {IProduct} from '../products/product';



import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';
import { CartState } from '../cart/cart.state';

@Component({
  selector: 'pm-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  Products: IProduct[] = [];
  private subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.CartState.subscribe((state: CartState) => {
        this.Products = state.products;
        console.log(this.Products);
      });
  }

}
