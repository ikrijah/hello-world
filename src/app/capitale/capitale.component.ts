import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capitale } from '../capitale.model';

@Component({
  selector: 'app-capitale',
  template: `
  <label for="pays">
  Nom du pays en anglais sinon ça marche pas :
  </label>
  <input *ngIf="capitale" type="pays" id="pays" name="Pays" [(ngModel)]="capitale.capital" >
  <div>
  </div>
  `,
  styles: []
})
export class CapitaleComponent implements OnInit {

  @Input() capitale: Capitale;

  constructor(http: HttpClient) {
    http.get<Capitale>('https://restcountries.eu/rest/v2/name/France')
      .subscribe(data => { console.log(data ); });
  }



  ngOnInit() {
  }

}
