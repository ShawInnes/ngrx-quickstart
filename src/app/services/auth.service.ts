import { Injectable } from '@angular/core';
import { AuthConfigConsts, tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import * as appActions from '../actions/app.actions';

import Auth0Lock from 'auth0-lock';
// import { Auth0Lock } from 'auth0-lock';

@Injectable()
export class AuthService {
  ID_TOKEN_STORAGE_ITEM = AuthConfigConsts.DEFAULT_TOKEN_NAME;
  PROFILE_STORAGE_ITEM = 'profile';

  lockOptions = {
    closable: false,
    theme: {
      primaryColor: '#FF6043',
      socialButtonStyle: 'small'
    },
    languageDictionary: {
      title: 'FairDealFx'
    },
    auth: {
      redirectUrl: window.location.origin,
      responseType: 'token',
      params: {
        scope: 'openid offline_access name email email_verified picture roles country country_code'
      }
    }
  };

  // Configure Auth0Lock
  lock = new Auth0Lock(
    environment.AUTH0_CLIENT_ID,
    environment.AUTH0_DOMAIN,
    this.lockOptions);

  constructor(private store: Store<AppState>) {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem(this.ID_TOKEN_STORAGE_ITEM, authResult.idToken);
      localStorage.setItem(this.PROFILE_STORAGE_ITEM, JSON.stringify(authResult.idTokenPayload));

      this.store.dispatch(new appActions.LoggedIn());
    });
  }

  public init(): Promise<boolean> {
    if (this.isAuthenticated()) {
      this.store.dispatch(new appActions.LoggedIn());
      return Promise.resolve(true);
    } else {
      return this.login();    
    }
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired(this.ID_TOKEN_STORAGE_ITEM);
  }

  private checkIfLocalStoreIsUpdated() {
    if (this.isAuthenticated()) {
      const authToken = localStorage.getItem(this.ID_TOKEN_STORAGE_ITEM);
      const profile = JSON.parse(localStorage.getItem(this.PROFILE_STORAGE_ITEM));
      const targetRole = profile && profile.roles && profile.roles.find(p => p === 'admin');
      const isAdmin = targetRole !== undefined;
      /*
      const user: User = Object.assign({
        sub: profile.sub,
        name: profile.name,
        email: profile.email,
        email_verified: profile.email_verified,
        picture: profile.picture,
        isAuthenticated: this.isAuthenticated(),
        isAdmin: isAdmin,
        roles: profile.roles
      });
      */
      this.store.dispatch(new appActions.LoggedIn());
    }
  }

  public login(): Promise<boolean> {
    let options: any = {

    };
    this.lock.show(options);
    return Promise.resolve(false);
  };

  public logout(redirect = true): Promise<boolean> {
    localStorage.removeItem(this.ID_TOKEN_STORAGE_ITEM);
    localStorage.removeItem(this.PROFILE_STORAGE_ITEM);

    return Promise.resolve(true);
  };
}
