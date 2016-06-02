import { Component } from '@angular/core';
import { AsyncRoute, RouteConfig,
         ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './common';
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
    loader: () => System.import('./dashboard').then(c => c.DashboardComponent),
    useAsDefault: true,
  }),
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    loader: () => System.import('./heroes').then(c => c.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/detail/:id',
    name: 'HeroDetail',
    loader: () => System.import('./heroes').then(c => c.HeroDetailComponent),
  }),
])
export class AppComponent {
  title = 'Tour of Heroes';
}
