import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export class ProductAction {
  static toggleProductCode = createAction('[Product] Toggle Product Code');

  static setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: number }>()
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

  static updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: Product }>()
  );

  static updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ product: Product }>()
  );

  static updateProductFailure = createAction(
    '[Product] Update Product Fail',
    props<{ error: string }>()
  );

  static deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
  );

  static deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ productId: number }>()
  );

  static deleteProductFailure = createAction(
    '[Product] Delete Product Fail',
    props<{ error: string }>()
  );

  static createProduct = createAction(
    '[Product] Create Product',
    props<{ product: Product }>()
  );

  static createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ product: Product }>()
  );

  static createProductFailure = createAction(
    '[Product] Create Product Fail',
    props<{ error: string }>()
  );
}
