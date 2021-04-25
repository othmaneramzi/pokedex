import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { pokemonModele } from '../pokemon/modele/pokemonModele';
import {Pokemon} from '../pokemon/modele/pokemon'
import { PokemeonDetailComponent } from './pokemeon-detail/pokemeon-detail.component';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons'


  constructor(private http: HttpClient) { 

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getPokemon(): Observable<pokemonModele> {
    return this.http.get<pokemonModele>(this.pokemonUrl+'?offset=0&limit=151').pipe(
      catchError(this.handleError<pokemonModele>('getPokemon'))
    );
  }

  getPokemonById(id: String): Observable<any> {
    return this.http.get<any>(this.pokemonUrl +'/'+id);
  }

  getPokemonsSearch(search:string): Observable<pokemonModele> {
    return this.http.get<pokemonModele>(this.pokemonUrl + "?search=" + search)
      .pipe(
        catchError(this.handleError<pokemonModele>("getPokemons"))
      )
  }

 
}
