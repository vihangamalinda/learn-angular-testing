
import { Component,ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {MatCardModule} from '@angular/material/card';
import { Pokemon } from '../../model/pokemon';
@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent implements OnInit{
  @Input() pokemon?:Pokemon;
  @Input() bff?:string ;
  @Input() id?:number ;

  officialsrc ="src/assets/official-artwork/1.png"
  // https://github.com/PokeAPI/sprites?tab=readme-ov-file#sprites
  constructor(){
  
  }
  ngOnInit(): void {
    console.log(this.bff);
    console.log(this.id)
    console.log(this.pokemon)

  }

}
