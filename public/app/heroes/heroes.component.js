import view from './heroes.component.html';
import styles from './heroes.component.scss';

import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from '../common/hero.service';

@Component({ // eslint-disable-line new-cap
  selector: 'heroes',
  template: view,
  styles: [
    styles,
  ],
})
export class HeroesComponent {
  heroes = [];
  selectedHero = undefined;

  constructor(_router: Router, _heroService: HeroService) {
    this._router = _router;
    this._heroService = _heroService;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => (this.heroes = heroes));
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
