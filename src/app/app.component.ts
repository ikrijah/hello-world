import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/home" >Home page</a></li>
      <li><a routerLink="/location" > Map</a></li>
      <li><a routerLink="/about" > About page</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`
  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  nav ul li {
  display: flex;
  justify-content: center;
  font-size: x-large;
  flex-grow: 1;
  }
  nav ul li a {
    padding: 10px;
    color: #C496AB;
  }
  nav ul li:hover {
    background-color:#F9DE78;
  }
  `]
})
export class AppComponent {
  title = 'metropolis-app';
}
