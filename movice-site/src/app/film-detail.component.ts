import { Component, Input } from '@angular/core';

import { Film } from './film';


@Component({
  selector: 'my-film-detail',
  template: `
    <div *ngIf="film">
        <h2>{{film.name}} details!</h2>
        <div><label>id: </label>{{film.id}}</div>
        <div><label>name: </label>{{film.name}}</div>
    </div>
    `
})
export class FilmDetailComponent {
    @Input()
    film: Film
}
