import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeroService } from "../hero.service";
import { Hero } from "../core/models/hero";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from "../message.service";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailComponent,
    RouterLink
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

/*export class HeroesComponent {
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

  /!*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*!/
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}*/
