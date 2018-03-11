import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import { Subscription } from 'rxjs/Subscription';
import { State } from './reducers/app.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  app: Observable<State>;
  subscription: Subscription;
  isAuthenticated: boolean = false;

  constructor (private appService: AppService) { 
    this.app = appService.app;
  }

  ngOnInit() {
    this.subscription = this.app
      .subscribe(
        app => {          
          this.isAuthenticated = app.isAuthenticated;
        },
        error => { 

        }
      );

    this.appService.init();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
