import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
const routes: Routes = [
  {path: '', component:EpisodiosComponent },
  {path: 'episodios', component: EpisodiosComponent},
  {path:'personajes', component: PersonajesComponent}, 
  {path:'personaje/:id', component: PersonajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ PersonajesComponent,EpisodiosComponent, PersonajeComponent ]
