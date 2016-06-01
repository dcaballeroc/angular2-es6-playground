import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroService } from '../common';
import template from './heroes.component.html';
import styles from './heroes.component.scss';

@Component({ // eslint-disable-line new-cap
  template,
  styles: [styles],
  selector: 'heroes',
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
