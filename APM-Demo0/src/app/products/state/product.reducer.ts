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
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};

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
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductAction.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductAction.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),
  on(ProductAction.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductAction.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),
  on(ProductAction.updateProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.map((item) =>
      action.product.id === item.id ? action.product : item
    );

    return {
      ...state,
      currentProductId: action.product.id,
      products: updatedProducts,
      error: '',
    };
  }),
  on(ProductAction.updateProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductAction.deleteProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.filter(
      (product) => action.productId !== product.id
    );

    return {
      ...state,
      currentProductId: null,
      products: updatedProducts,
      error: '',
    };
  }),
  on(ProductAction.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductAction.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.product.id,
      products: [...state.products, action.product],
      error: '',
    };
  }),
  on(ProductAction.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
