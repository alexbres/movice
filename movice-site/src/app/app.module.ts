import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FilmDetailComponent } from './film-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    FilmDetailComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
