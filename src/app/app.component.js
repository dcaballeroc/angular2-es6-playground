import { Component } from '@angular/core';
import { AsyncRoute, RouteConfig,
         ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './common/hero.service';
import template from './app.component.html';
import styles from './app.component.scss';

@Component({ // eslint-disable-line new-cap
  template,
  styles: [styles],
  selector: 'ng2-playground',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService],
})
@RouteConfig([ // eslint-disable-line new-cap
  new AsyncRoute({
    path: '/dashboard',
    name: 'Dashboard',
    loader: () => System.import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    useAsDefault: true,
  }),
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    loader: () => System.import('./heroes/heroes.component').then(c => c.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/detail/:id',
    name: 'HeroDetail',
    loader: () => System.import('./heroes/heroDetail.component').then(c => c.HeroDetailComponent),
  }),
])
export class AppComponent {
  title = 'Tour of Heroes';
}
