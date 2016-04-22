import { Component, Input } from 'angular2/core';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name }} details</h2>
      <div><label>ID: </label>{{ hero.id }}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" type="text" placeholder="name">
      </div>
    </div>
    `,
})
export class HeroDetailComponent {
  @Input()
  hero;
}
