import { IProduct } from './../products/product';

export interface CartState {
 loaded: boolean;
 products: IProduct[];

}
