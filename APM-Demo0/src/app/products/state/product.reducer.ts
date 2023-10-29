import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import { ProductAction } from './product.action';

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: '',
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

export const getError = createSelector(productSelector, (state) => state.error);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductAction.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductAction.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProduct: action.product,
    };
  }),
  on(ProductAction.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: null,
    };
  }),
  on(ProductAction.initializeCurrentProduct, (state): ProductState => {
    const currentProduct: Product = {
      id: 0,
      productName: '',
      productCode: 'New',
      description: '',
      starRating: 0,
    };

    return {
      ...state,
      currentProduct: currentProduct,
    };
  }),
  on(ProductAction.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductAction.loadProductsFailure, (state, action) => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  })
);