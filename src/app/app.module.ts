import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes/heroes.component";

@NgModule({
  declarations: [ //private
    AppComponent,
    // HeroesComponent
  ],
  imports: [ // import
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroesComponent
  ],
  providers: [], // injectables, DI
  bootstrap: [AppComponent], //
  exports: [], // publics
})
export class AppModule {
}
