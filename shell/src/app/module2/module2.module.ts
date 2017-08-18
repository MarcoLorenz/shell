import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { PluginConfig } from "../shared";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    C1Component,
    C2Component
  ]
})
@PluginConfig({
  prefix: "m2",
  placements: [
    { slot: "path1", priority: 2, component: C1Component, route: true },
    { slot: "path2", priority: 4, component: C2Component, route: true }
  ]
})
export class Module2Module { }
