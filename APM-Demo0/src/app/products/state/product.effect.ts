import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { ProductAction } from './product.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductAction.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => {
            return ProductAction.loadProductsSuccess({ products });
          }),
          catchError((error) =>
            of(ProductAction.loadProductsFailure({ error }))
          )
        )
      )
    );
  });
}
