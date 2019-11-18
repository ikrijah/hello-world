import { Component } from '@angular/core';
import { Capitale } from './capitale.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Metropolis</h1>
  <app-capitale></app-capitale>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metropolis-app';
}
