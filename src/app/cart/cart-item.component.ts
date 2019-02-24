import { CartService } from './cart.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '../products/product';
@Component({
        selector: 'pm-cart-item',
        templateUrl: './cart-item.component.html'
    })

export  class CartItemComponent {
    @Input() product: IProduct;
    constructor(private _cartService: CartService) { }
    AddProduct(_product: IProduct) {
        _product.added = true;
        this._cartService
            .addProduct(_product);
    }
    RemoveProduct(_product: IProduct) {
        _product.added = false;
        this._cartService
            .removeProduct(_product.productId);
    }

}
