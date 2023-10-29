import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { ProductAction } from './product.action';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
} from 'rxjs/operators';
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

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductAction.updateProduct),
      concatMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) => ProductAction.updateProductSuccess({ product })),
          catchError((error) =>
            of(ProductAction.updateProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductAction.deleteProduct),
      exhaustMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() =>
            ProductAction.deleteProductSuccess({ productId: action.productId })
          ),
          catchError((error) => of(ProductAction.deleteProductFailure(error)))
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductAction.createProduct),
      concatMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => ProductAction.createProductSuccess({ product })),
          catchError((error) =>
            of(ProductAction.createProductFailure({ error }))
          )
        )
      )
    )
  );
}
