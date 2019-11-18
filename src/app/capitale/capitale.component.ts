import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capitale } from '../capitale.model';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-capitale',
  template: `
  <label for="pays">
  Enter the name of the country :
  </label>
  <input type="pays" id="pays" name="Pays" [(ngModel)]="pays" required >
  <button type="submit" (click)="myFunction()">Submit</button>
  <p> {{Data}} </p>
  `,
  styles: []
})
export class CapitaleComponent implements OnInit {
  pays = '';
  Data: string;
  constructor(private http: HttpClient) {
  }

  myFunction() {
    this.http.get<any>('https://restcountries.eu/rest/v2/name/' + this.pays)
    .subscribe(data => { this.Data = data[0].capital; });
    console.log(this.Data);
  }

  ngOnInit() {
  }

}
