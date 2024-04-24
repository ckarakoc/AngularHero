import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "./core/models/hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const data = of(HEROES); // fetch
    this.messageService.add('HeroService: fetched heroes');
    return data ?? [];
  }
  // async getHeroes(): Promise<Hero[]> {
  //   const data = await HEROES; // fetch
  //   return await data ?? [];
  // }
}
