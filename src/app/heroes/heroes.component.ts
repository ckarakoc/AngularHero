import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

import { Hero } from "../core/models/hero";
import { HEROES } from "../mock-heroes";

@Component({
  // standalone: true,
  // imports: [NgFor],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/
}
