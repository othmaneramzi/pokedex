import { Component, OnInit } from '@angular/core';
import { pokemonModele } from '../modele/pokemonModele';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons : pokemonModele 
  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon (){
    this.pokemonService.getPokemon().subscribe(pokemon => this.pokemons = pokemon);
  }

  onScroll():void{
    console.log('scrolled!!');
  }

}
