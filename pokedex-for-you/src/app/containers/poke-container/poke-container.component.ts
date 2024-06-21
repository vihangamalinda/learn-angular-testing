import { Component, OnInit } from '@angular/core';
import { PokeCardComponent } from "../../components/poke-card/poke-card.component";
import { Pokemon } from '../../model/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-container',
  standalone: true,
  templateUrl: './poke-container.component.html',
  styleUrl: './poke-container.component.css',
  imports: [PokeCardComponent,CommonModule],
})
export class PokeContainerComponent implements OnInit  {
  pokemons: Pokemon[]=[
    new Pokemon(1, 'Bulbasaur', 'For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.', 'grass', ''),
    new Pokemon(2, 'Ivysaur', 'The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.', 'grass', ''),
    new Pokemon(3, 'Venusaur', 'While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.', 'grass', ''),
    new Pokemon(4, 'Charmander', 'The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.', 'fire', ''),
    new Pokemon(5, 'Charmeleon', 'When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.', 'fire', ''),
    new Pokemon(6, 'Charizard', 'If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.', 'fire', ''),
    new Pokemon(7, 'Squirtle', 'After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.', 'water', ''),
    new Pokemon(8, 'Wartortle', 'Wartortle’s long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people.', 'water', ''),
    new Pokemon(9, 'Blastoise', 'It deliberately increases its body weight so it can withstand the recoil of the water jets it fires.', 'water', ''),
  ];
  constructor(){
    console.log(this.pokemons);
  }
  ngOnInit(): void {
   
  }
}
