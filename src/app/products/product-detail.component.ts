import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  recipieTitle = 'Recipies For ';
  errorMessage = '';
  product: IProduct | undefined;
  showRecipies = false;
  selectedRecipie: any;
  urlSafe: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
  toggleShowRecipies() {
    this.showRecipies = !this.showRecipies;
  }
  showRecipieDetails(recipie) {
    this.selectedRecipie = recipie;
    // tslint:disable-next-line:max-line-length
    this.selectedRecipie.url = this.sanitizer.bypassSecurityTrustResourceUrl(recipie.url);
  }

}
