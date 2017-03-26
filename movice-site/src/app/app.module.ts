import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { FilmService }  from './film.service';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    FilmsComponent, 
    FilmDetailComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    FilmService
  ],
})

export class AppModule { }
