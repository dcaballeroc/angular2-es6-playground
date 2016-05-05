import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from '../common/hero.service';

@Component({
  selector: 'heroes',
  template: require('./heroes.component.html'),
  styles: [
    require('./heroes.component.scss'),
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
