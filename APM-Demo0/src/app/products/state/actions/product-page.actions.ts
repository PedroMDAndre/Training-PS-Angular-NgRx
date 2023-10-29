import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export class ProductPageActions {
  static toggleProductCode = createAction('[Product] Toggle Product Code');

  static setCurrentProduct = createAction(
    '[Product Page] Set Current Product',
    props<{ currentProductId: number }>()
  );

  static clearCurrentProduct = createAction('[Product] Clear Current Product');

  static initializeCurrentProduct = createAction(
    '[Product Page] Initialize Current Product'
  );

  static loadProducts = createAction('[Product Page] Load');

  static updateProduct = createAction(
    '[Product Page] Update Product',
    props<{ product: Product }>()
  );

  static deleteProduct = createAction(
    '[Product Page] Delete Product',
    props<{ productId: number }>()
  );

  static createProduct = createAction(
    '[Product Page] Create Product',
    props<{ product: Product }>()
  );
}
