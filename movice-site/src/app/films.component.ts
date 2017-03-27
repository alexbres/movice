import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Film } from './film';
import { FilmService } from './film.service';


@Component({
  selector: 'my-films',
  styleUrls: ['./films.component.css'],
  templateUrl: './films.component.html',
  })

export class FilmsComponent implements OnInit{
  films: Film[];
  selectedFilm: Film;

  constructor(
    private router: Router,
    private filmService: FilmService) { }


  getFilms(): void {
    this.filmService.getFilms().then(films => this.films = films);
  }

  ngOnInit(): void {
    this.getFilms();
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFilm.id]);
  }
}

