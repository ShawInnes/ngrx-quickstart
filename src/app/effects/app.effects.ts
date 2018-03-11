import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';

import { AuthService } from '../services/auth.service';
import * as app from '../actions/app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  init$: Observable<Action> = this.actions$
    .ofType(app.AppActionTypes.InitAction)
    .switchMap(() => this.authService.init())
    .map(() => new app.LoggingIn())

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(app.AppActionTypes.LoginAction)
    .switchMap(() => this.authService.login())
    .map(() => new app.LoggingIn())

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(app.AppActionTypes.LogoutAction)
    .switchMap(() => this.authService.logout())
    .map(() => new app.LoggedOut())

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}