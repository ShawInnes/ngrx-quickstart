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
  init$: Observable<Action> = defer(() => {    
    return of(new app.Init(this.authService.isAuthenticated()));
  });
  
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}