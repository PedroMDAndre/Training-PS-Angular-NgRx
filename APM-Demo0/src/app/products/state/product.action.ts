import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export class ProductAction {
  static toggleProductCode = createAction('[Product] Toggle Product Code');

  static setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ product: Product }>()
  );

  static clearCurrentProduct = createAction('[Product] Clear Current Product');

  static initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
  );

  static loadProducts = createAction('[Product] Load');

  static loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[] }>()
  );

  static loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
  );
}
