import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pokemonModele } from '../modele/pokemonModele';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../modele/pokemon';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokes: Pokemon[] = []
  pokemons : pokemonModele 
  pokemon:any
  @Output() idEmitter = new EventEmitter();
  constructor(private pokemonService: PokemonService,  private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon (){
    this.pokemonService.getPokemon().subscribe(pokemon => this.pokemons = pokemon);
  }

  onScroll():void{
    console.log('scrolled!!');
  }

  pick(pokemonId:String): void{
   
    this.pokemonService.getPokemonById(pokemonId).subscribe(
      (result) => this.pokemon = result
    );
  }
  search(value:string){
    if(value){
    this.pokemonService.getPokemonsSearch(value).subscribe(pokemon => this.pokes = pokemon.data)
    }else{
      this.getPokemon()
    }
  }

  

}
