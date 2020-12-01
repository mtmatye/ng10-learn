import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinComponent } from './spin/spin.component';

@NgModule({
  declarations: [HerosComponent, SpinComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class HerosModule {}
