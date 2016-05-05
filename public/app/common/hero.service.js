import { Injectable } from 'angular2/core';
import HEROES from './heroes.mock';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise(resolve =>
      setTimeout(() => resolve(HEROES), 5000)
    );
  }

  getHero(id) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}