import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: 'films/:id',
    component: FilmsComponent,
  },
  {
    path: 'people/:id',
    component: PeopleComponent
  },
  {
    path: 'planets/:id',
    component: PlanetsComponent
  },
  {
    path: 'species/:id',
    component: SpeciesComponent
  },
  {
    path: 'starships/:id',
    component: StarshipsComponent
  },
  {
    path: 'vehicles/:id',
    component: VehiclesComponent
  },
  {
    path: '**',
    redirectTo: 'films/1'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
