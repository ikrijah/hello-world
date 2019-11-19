import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-carte',
  template: `
    <section id="location">
    <h1> Location : </h1>
      <img src="https://open.mapquestapi.com/staticmap/v5/map?key=uopypmTZwc54oDAFWP1oYRdlvANGXink&locations={{capitalName}},{{countryName}}&zoom=6">
    </section>
  `,
  styles: []
})
export class CarteComponent implements OnInit {

  // ce component reçoit les données de capitale.component
  @Input() countryName: string;
  @Input() capitalName: string;

  constructor(private locationService: LocationService) {}


  ngOnInit() {
    this.countryName = this.locationService.getCountry();
    this.capitalName = this.locationService.getCapital();
  }

}
