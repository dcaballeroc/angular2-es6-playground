import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from '../common/hero.service';
import template from './heroDetail.component.html';
import styles from './heroDetail.component.scss';

@Component({ // eslint-disable-line new-cap
  template,
  styles: [styles],
  selector: 'hero-detail',
})
export class HeroDetailComponent {
  hero = undefined;

  constructor(_heroService: HeroService, _routeParams: RouteParams) {
    this._heroService = _heroService;
    this._routeParams = _routeParams;
  }

  ngOnInit() {
    const id = +this._routeParams.get('id');
    this._heroService.getHero(id).then(hero => (this.hero = hero));
  }

  goBack() {
    window.history.back();
  }
}
