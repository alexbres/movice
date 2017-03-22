import { Injectable } from '@angular/core';

import { Film } from './film';
import { FILMS } from './mock-films';

@Injectable()
export class FilmService {
    getFilms(): Promise<Film[]> {
        return Promise.resolve(FILMS);
    }
}
