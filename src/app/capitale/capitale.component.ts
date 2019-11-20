import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-capitale',
  template: `
  <h1>Metropolis</h1>

  <form>
  <label>
    Enter the name of the country :
  </label>
    <select name="countryName" [(ngModel)]="countryName">
      <option *ngFor="let country of allData" [ngValue]="country.name" required>{{country.name}}</option>
    </select>
  <button type="submit" (click)="onClick()">Submit</button>
  <div>
    Capital : {{capitalName}} <br>
    Inhabitants : {{populationNumber}} <br>
    Flag : <br><br> <img id="flag" src="{{flag}}" > <br>
  </div>
  </form>
  `,
  styles: [`
  h1, form {
    text-align: center;
  }
  .ng-valid[required], .ng-valid.required  {
    background-color: #E1F2C7;
  }
  .ng-invalid:not(form)  {
    background-color: #F2C7DB;
  }
  #flag {
    max-width:20%;
    height:auto;
  `]
})
export class CapitaleComponent implements OnInit {

  countryName = '';
  capitalName = '';
  populationNumber: number;
  flag: string;
  allData: any;

  constructor(private http: HttpClient, private locationService: LocationService) { }

  onClick() {
    this.http.get<any>('https://restcountries.eu/rest/v2/name/' + this.countryName)
    .subscribe(data => { this.capitalName = data[0].capital;
                         this.populationNumber = data[0].population;
                         this.flag = data[0].flag;
                         this.locationService.updateData( this.countryName, data[0].capital );
                        });

  }


  ngOnInit() {
    this.http.get<any>('https://restcountries.eu/rest/v2/all')
    .subscribe(data => { this.allData = data; });
  }


}
