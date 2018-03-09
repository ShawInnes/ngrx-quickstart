import { Action } from '@ngrx/store';

export enum AppActionTypes {
  InitAction = '[App] Init'
}

export class Init implements Action {
  readonly type = AppActionTypes.InitAction;
  
  constructor(public isAuthenticated: boolean) { }
}

export type AppActions = Init;
