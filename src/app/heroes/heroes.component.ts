import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HEROES } from "../mock-heroes";
import { Hero } from "../core/models/hero";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero? : Hero;

  constructor() {
    this.selectedHero = this.heroes[0];
  }

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
