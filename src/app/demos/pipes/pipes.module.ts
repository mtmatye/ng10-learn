import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [ExponentialStrengthPipe],
  imports: [CommonModule],
  exports: [ExponentialStrengthPipe],
})
export class PipesModule {}
