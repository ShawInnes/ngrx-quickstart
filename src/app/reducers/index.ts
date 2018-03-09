import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromApp from './app.reducer';

export interface AppState {

  app: fromApp.State;
}

export const reducers: ActionReducerMap<AppState> = {

  app: fromApp.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
