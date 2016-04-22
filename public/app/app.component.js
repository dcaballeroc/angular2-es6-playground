import './app.component.scss';
import { Component } from 'angular2/core';
import { HeroDetailComponent } from './heroes/heroDetail.component';

const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

@Component({
  selector: 'ng2-playground',
  template: `
    <h1>{{ title }}</h1>
    <h2>All Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero == selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  directives: [HeroDetailComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;

  onSelect(hero) {
    this.selectedHero = hero;
  }
}
