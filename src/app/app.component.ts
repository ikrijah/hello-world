import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav> <ul>
  <li><a routerLink="/home" >Home page    </a></li>
  <li><a routerLink="/location" > Map     </a></li>
  <li><a routerLink="/about" > About page</a></li>
  </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metropolis-app';
}
