import { Component, Input } from '@angular/core';
import { CommonModule, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Hero } from "../core/models/hero";

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
}
