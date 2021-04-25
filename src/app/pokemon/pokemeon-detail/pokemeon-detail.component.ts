import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemeon-detail',
  templateUrl: './pokemeon-detail.component.html',
  styleUrls: ['./pokemeon-detail.component.scss']
})
export class PokemeonDetailComponent implements OnInit {
  pokemon: any;
  private audio: HTMLMediaElement;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getPokemonDetail();
  
  }

  pad(num: string | any[], size: number): string {
    num = num.toString();
    while (num.length < size) { num = '0' + num; }
    return num;
  }

  getPokemonDetail():void{
    const pokemonId = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(pokemonId).subscribe(
      (result) => this.pokemon = result
    );
  }

   play():void {
    this.audio.play();
   }


}
