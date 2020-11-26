import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HerosModule } from './heros/heros.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, HerosModule, CommonModule],
})
export class HomeModule {}
