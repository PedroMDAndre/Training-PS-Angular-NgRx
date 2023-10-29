import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}

const productSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  productSelector,
  (state) => state.showProductCode
);

export const getCurrentProductId = createSelector(
  productSelector,
  (state) => state.currentProductId
);

export const getCurrentProduct = createSelector(
  productSelector,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    } else {
      return currentProductId
        ? state.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);

export const getProducts = createSelector(
  productSelector,
  (state) => state.products
);

export const getError = createSelector(productSelector, (state) => state.error);
