import { createAction } from '@ngrx/store';

export class UserAction {
  static toggleMaskUserName = createAction('[User Page] Toggle Mask User Name');
}
