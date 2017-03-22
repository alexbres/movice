import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-films></my-films>
  `
})
export class AppComponent {
  title = 'Tour of films';
}
