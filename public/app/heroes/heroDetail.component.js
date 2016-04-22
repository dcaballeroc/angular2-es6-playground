import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from '../common/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/heroes/heroDetail.component.html',
  styles: [
    `label {
      display: inline-block;
      width: 3em;
      margin: .5em 0;
      color: #607D8B;
      font-weight: bold;
    }
    input {
      height: 2em;
      font-size: 1em;
      padding-left: .4em;
    }
    button {
      margin-top: 20px;
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #ccc;
      cursor: auto;
    }`,
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
