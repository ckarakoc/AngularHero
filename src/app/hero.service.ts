import { Injectable } from '@angular/core';
import { catchError, map, tap, Observable, of, take } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Hero } from "./core/models/hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: string = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${ message }`);
  }

  /*getHeroes(): Observable<Hero[]> {
    const data = of(HEROES); // fetch
    this.log('HeroService: fetched heroes');
    return data ?? [];
  }*/

  // async getHeroes(): Promise<Hero[]> {
  //   const data = await HEROES; // fetch
  //   return await data ?? [];
  // }

  getHeroes(): Observable<Hero[]> {
    const data = this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', [])),
      ); // fetch
    return data;
  }

  /*getHero(id: number): Observable<Hero> {
    const data = this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        map(heroes => heroes.find(h => h.id === id)!)
      );
    this.log(`HeroService: fetched hero id=${ id }`);
    return data;
  }*/

  getHero(id: number): Observable<Hero> {
    const url = `${ this.heroesUrl }/${ id }`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${ id }`)),
      catchError(this.handleError<Hero>(`getHero id=${ id }`))
    );
  }

  /*getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.log(`HeroService: fetched hero id=${ id }`);
    return of(hero);
  }*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${ operation } failed: ${ error.message }`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * PUT: update the hero on the server
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${ hero.id }`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${ newHero.id }`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${ this.heroesUrl }/${ id }`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${ id }`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${ this.heroesUrl }/?name=${ term }`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${ term }"`) :
        this.log(`no heroes matching "${ term }"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
