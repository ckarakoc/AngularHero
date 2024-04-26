import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ //private
    AppComponent, DashboardComponent,
    // MessagesComponent,
    // HeroDetailComponent,
    // HeroesComponent,
  ],
  imports: [ // import
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HttpClientModule,
  ],
  providers: [], // injectables, DI
  bootstrap: [AppComponent], //
  exports: [], // publics
})
export class AppModule {
}
