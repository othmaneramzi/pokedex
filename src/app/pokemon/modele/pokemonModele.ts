import { Pokemon } from "./pokemon";

export interface pokemonModele{
    data : Pokemon[],
    limit : number,
    offset : number
}