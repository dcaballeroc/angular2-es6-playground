import './app.component.scss';
import { Component } from 'angular2/core';

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
      <li *ngFor="#hero of heroes">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <h2>{{ hero.name }} details</h2>
    <div><label>ID: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" type="text" placeholder="name">
    </div>
    `,
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  hero = this.heroes[0];
}
