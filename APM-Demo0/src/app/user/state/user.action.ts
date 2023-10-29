import { createAction } from '@ngrx/store';

export class UserAction {
  static toggleMaskUserName = createAction('[User] Toggle Mask User Name');
}
