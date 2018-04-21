import { Action } from '@ngrx/store';

export enum AppActionTypes {
  InitAction = '[App] Init',
  LoginAction = '[App] Login',
  LoggingInAction = '[App] Logging In',
  LoggedInAction = '[App] Logged In',
  LogoutAction = '[App] Logout',
  LoggedOutAction = '[App] Logged Out'
}

export class Init implements Action {
  readonly type = AppActionTypes.InitAction;
}

export class Login implements Action {
  readonly type = AppActionTypes.LoginAction;
}

export class LoggingIn implements Action {
  readonly type = AppActionTypes.LoggingInAction;
}

export class LoggedIn implements Action {
  readonly type = AppActionTypes.LoggedInAction;
}

export class Logout implements Action {
  readonly type = AppActionTypes.LogoutAction;
}

export class LoggedOut implements Action {
  readonly type = AppActionTypes.LoggedOutAction;
}

export type AppActions = Init | Login | LoggedIn | LoggingIn | Logout | LoggedOut;
