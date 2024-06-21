import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { PokeContainerComponent } from "./containers/poke-container/poke-container.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, PokeContainerComponent]
})
export class AppComponent {
  title = 'pokedex-for-you';
}
