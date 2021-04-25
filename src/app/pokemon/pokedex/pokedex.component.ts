import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  
  id?: string
  

  constructor() { }

  ngOnInit(): void {
 
  }

  onPick(event:Event): void{
    console.log(event)
    this.id = String(event)
  }

  
  }

  

   
  

