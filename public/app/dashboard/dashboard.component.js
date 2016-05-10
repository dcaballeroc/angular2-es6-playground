import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from '../common/hero.service';
import template from './dashboard.component.html';
import styles from './dashboard.component.scss';

@Component({ // eslint-disable-line new-cap
  template,
  styles: [styles],
  selector: 'dashboard',
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
