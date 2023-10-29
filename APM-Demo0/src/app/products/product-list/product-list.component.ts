import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Store } from '@ngrx/store';
import {
  State,
  getCurrentProduct,
  getError,
  getProducts,
  getShowProductCode,
} from '../state/product.reducer';
import { ProductAction } from '../state/product.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  errorMessage$: Observable<string>;
  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.displayCode$ = this.store.select(getShowProductCode);
    this.products$ = this.store.select(getProducts);
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductAction.loadProducts());
  }

  checkChanged(): void {
    this.store.dispatch(ProductAction.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductAction.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductAction.setCurrentProduct({ product }));
  }
}
