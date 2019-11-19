import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapitaleComponent } from './capitale/capitale.component';
import { AboutComponent } from './about/about.component';
import { CarteComponent } from './carte/carte.component';


const routes: Routes = [
  {path: '', component: CapitaleComponent },
  {path: 'home', component: CapitaleComponent },
  {path: 'location', component: CarteComponent},
  {path: 'about', component: AboutComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
