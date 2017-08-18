import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Module1Module } from "./module1";
import { Module2Module } from "./module2";
import { routes } from "./shared";
import { RouterModule } from "@angular/router";
import { PluginConfig } from "./shared";

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    Module1Module,
    Module2Module,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@PluginConfig({
  placements: [
    { slot: "**", priority: 1, component: LandingPageComponent, route: true }
  ]
})
export class AppModule { }
