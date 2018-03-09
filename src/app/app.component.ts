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

  constructor (private appService: AppService) { 
    this.app = appService.app;
  }

  ngOnInit() {
    console.log('AppService ngOnInit');
    this.subscription = this.app
      .subscribe(
        app => {
          //Do something
          console.log('app do something');
        },
        error => { 
          console.log('app error');
        }
      );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
