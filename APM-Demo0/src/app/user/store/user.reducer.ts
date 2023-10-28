import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../user';

export interface UserState {
  maskUserName: boolean;
  user: User;
}

const initialState: UserState = {
  maskUserName: false,
  user: null,
};

const userSelector = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  userSelector,
  (state) => state.maskUserName
);

export const getUser = createSelector(userSelector, (state) => state.user);

export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction('[User] Toggle Mask User Name'), (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
