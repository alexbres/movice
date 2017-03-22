import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilmService }  from './film.service';
import { AppComponent }  from './app.component';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    FilmsComponent, 
    FilmDetailComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    FilmService
  ],
})
export class AppModule { }
