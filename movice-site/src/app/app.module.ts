import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { FilmService }  from './film.service';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'films',
        component: FilmsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },

    ])
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
