
import { Action } from '@ngrx/store';
import * as app from '../actions/app.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case app.AppActionTypes.InitAction:
      console.log('INIT Action ', action);
      return state;
    default:
      return state;
  }
}
