import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AppEffects
    ]),
    metaReducers
  ],
  providers: [
    AppService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
