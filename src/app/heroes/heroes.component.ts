import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeroService } from "../hero.service";
import { Hero } from "../core/models/hero";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from "../message.service";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailComponent
  ],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  // heroService: HeroService = inject(HeroService);
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    // this.selectedHero = this.heroes[0]; // doesn't do anything when async-await is used
  }

  ngOnInit() {
    // this.heroes = this.heroService.getHeroes();//.then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
