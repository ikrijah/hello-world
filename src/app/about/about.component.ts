import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1> ABOUT </h1>
    <p>
      <strong> Metropolis </strong> is an Angular project made by <strong> KRIJAH Iptissame. </strong> <br> <br>
      Click on the input country you want information about and then click on submit. <br>
      It will give you its capital, its population and its flag. <br>
      The map page will give you a map focusing on the country you submitted. By default, it is focused on the USA. <br>
      In the future versions, we could add the current political representative of each country. <br>
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
