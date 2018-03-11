
import { Action } from '@ngrx/store';
import * as app from '../actions/app.actions';

export interface State {
  isAuthenticated: boolean;
}

export const initialState: State = {
  isAuthenticated: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case app.AppActionTypes.InitAction:
      console.log(action);
      return Object.assign({}, state, { isAuthenticated: (<any>action).isAuthenticated });
    case app.AppActionTypes.LoggedInAction:
      return Object.assign({}, state, { isAuthenticated: true });
    case app.AppActionTypes.LoggedOutAction:
      return Object.assign({}, state, { isAuthenticated: false });
    default:
      return state;
  }
}
