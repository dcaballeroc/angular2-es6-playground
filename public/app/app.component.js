import view from './app.component.html';
import styles from './app.component.scss';

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/heroDetail.component';
import { HeroService } from './common/hero.service';

@Component({
  selector: 'ng2-playground',
  template: view,
  styles: [
    styles,
  ],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService],
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true,
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent,
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent,
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
