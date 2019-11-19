import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  country: string;
  capital: string;

  constructor() { }

  updateData(country: string, capital: string) { // on update le pays qui a été selectionné et sa capitale
    this.country = country ;
    this.capital = capital ;
  }

  getCountry() {
    return this.country;
  }

  getCapital() {
    return this.capital;
  }


}
