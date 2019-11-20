import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-carte',
  template: `
    <section id="carto">
    <h1> Location :</h1>
    <div> The loading process will take a few seconds... </div> <br>
    <img src="https://open.mapquestapi.com/staticmap/v5/map?key=uopypmTZwc54oDAFWP1oYRdlvANGXink&locations={{capitalName}},{{countryName}}&zoom=6&size=600,610">
    </section>

  `,
  styles: []
})
export class CarteComponent implements OnInit {

  // ce component reçoit les données de capitale.component (nom du pays et de la capitale)
  @Input() countryName: string;
  @Input() capitalName: string;

  constructor(private locationService: LocationService) {}


  ngOnInit() {
    this.countryName = this.locationService.getCountry();
    this.capitalName = this.locationService.getCapital();
  }

}
