import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers';
import { State } from '../reducers/app.reducer';

@Injectable()
export class AppService {
  app: Observable<State>;

  constructor(private store: Store<AppState>) {
    this.app = store.select(store => store.app);
  }
}
