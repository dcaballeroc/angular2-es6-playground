import view from './dashboard.component.html';
import styles from './dashboard.component.scss';

import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from '../common/hero.service';

@Component({
  selector: 'dashboard',
  template: view,
  styles: [
    styles,
  ],
})

export class DashboardComponent {
  heroes = [];

  constructor(_router: Router, _heroService: HeroService) {
    this._router = _router;
    this._heroService = _heroService;
  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => (this.heroes = heroes.slice(1, 5)));
  }

  gotoDetail(hero) {
    const link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
