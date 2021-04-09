import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemeonDetailComponent} from './pokemon/pokemeon-detail/pokemeon-detail.component'
import { MatListModule } from '@angular/material/list';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemeonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
