import { IProduct } from '.././products/product';
import { CartState } from './cart.state';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Injectable} from '@angular/core';

import { Observable, throwError, Subject} from 'rxjs';



import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}
  private cartSubject = new Subject<CartState>();
    Products: IProduct[] = [];
    CartState = this.cartSubject.asObservable();
    addProduct(_product) {
      console.log('in service');
      this.Products.push(_product);
      this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    }
    removeProduct(id) {
      this.Products = this.Products.filter((_item) =>  _item.productId !== id );
      this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
    }

  getAllProducts(): Observable <any> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
