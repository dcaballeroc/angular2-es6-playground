import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from '../common/hero.service';

@Component({
  selector: 'hero-detail',
  template: require('./heroDetail.component.html'),
  styles: [
    require('./heroDetail.component.scss'),
  ],
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
