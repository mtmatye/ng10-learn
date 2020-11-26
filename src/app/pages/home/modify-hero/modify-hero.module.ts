import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyHeroRoutingModule } from './modify-hero-routing.module';
import { ModifyHeroComponent } from './modify-hero.component';


@NgModule({
  declarations: [ModifyHeroComponent],
  imports: [
    CommonModule,
    ModifyHeroRoutingModule
  ]
})
export class ModifyHeroModule { }
