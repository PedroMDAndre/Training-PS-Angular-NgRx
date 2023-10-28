import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

const productSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  productSelector,
  (state) => state.showProductCode
);

export const getCurrentProduct = createSelector(
  productSelector,
  (state) => state.currentProduct
);

export const getProducts = createSelector(
  productSelector,
  (state) => state.products
 );

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
