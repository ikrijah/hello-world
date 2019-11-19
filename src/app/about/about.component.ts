import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1> ABOUT </h1>
    <p>
      This is an Angular project.
      Type in input the country from which you want information and click on submit.
      It will give you its capital, its population and its flag.
      In the future versions, we could access to the Google map to see the precise location of the country.
      Plus, we could add the main political representative of each country.
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
