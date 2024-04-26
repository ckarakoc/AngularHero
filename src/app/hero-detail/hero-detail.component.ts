import { Component, Input } from '@angular/core';
import { CommonModule, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../core/models/hero";
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',

  imports: [
    UpperCasePipe,
    FormsModule,
    CommonModule
  ]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
