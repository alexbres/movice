import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Film } from './film';

@Injectable()
export class FilmService {

    private filmsUrl = 'api/films';  // URL to web api

    constructor(private http: Http) { }

    getFilms(): Promise<Film[]> {
        return this.http.get(this.filmsUrl)
               .toPromise()
               .then(response => response.json().data as Film[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getFilm(id: number): Promise<Film> {
        const url = `${this.filmsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Film)
            .catch(this.handleError);
        }

}
