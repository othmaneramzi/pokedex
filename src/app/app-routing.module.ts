import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemeonDetailComponent } from './pokemon/pokemeon-detail/pokemeon-detail.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import {PokedexComponent} from './pokemon/pokedex/pokedex.component';

const routes: Routes = [
  {path:'', component: PokedexComponent},
  {path:'detail/:id', component: PokemeonDetailComponent},
 
];                                             

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
