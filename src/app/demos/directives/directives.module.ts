import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [UnlessDirective, HighlightDirective],
  imports: [CommonModule],
  exports: [UnlessDirective, HighlightDirective],
})
export class DirectivesModule {}
