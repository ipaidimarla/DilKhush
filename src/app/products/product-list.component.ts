import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';
import { CartState } from '../cart/cart.state';


@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  imageWidth = 50;
  imageMargin = 2;
  cartCount = 0;
  showImage = true;
  errorMessage: string;
  filteredProducts: IProduct[];
  private subscription: Subscription;


  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
  }
  /**
   *
   */
  constructor(private productServcie: ProductService, private cartService: CartService) {

  }


  products: IProduct[];

  toggleShowImage(): void {

    this.showImage = !this.showImage;

  }
  ngOnInit(): void {
    console.log('In OnInit');
    this.productServcie.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
  performFiltering(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;

  }
  addToCart(product: IProduct) {
    this.cartCount++;
    this.cartService.addProduct(product);
  }
  deleteFromCart(product: IProduct) {
    this.cartCount--;
    this.cartService.removeProduct(product);
  }
}
