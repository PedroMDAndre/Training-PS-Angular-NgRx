import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export class ProductApiActions {
  static loadProductsSuccess = createAction(
    '[Product API] Load Success',
    props<{ products: Product[] }>()
  );

  static loadProductsFailure = createAction(
    '[Product API] Load Fail',
    props<{ error: string }>()
  );

  static updateProductSuccess = createAction(
    '[Product API] Update Product Success',
    props<{ product: Product }>()
  );

  static updateProductFailure = createAction(
    '[Product API] Update Product Fail',
    props<{ error: string }>()
  );

  static deleteProductSuccess = createAction(
    '[Product API] Delete Product Success',
    props<{ productId: number }>()
  );

  static deleteProductFailure = createAction(
    '[Product API] Delete Product Fail',
    props<{ error: string }>()
  );

  static createProductSuccess = createAction(
    '[Product API] Create Product Success',
    props<{ product: Product }>()
  );

  static createProductFailure = createAction(
    '[Product API] Create Product Fail',
    props<{ error: string }>()
  );
}
