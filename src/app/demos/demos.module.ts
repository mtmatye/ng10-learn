import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesModule, DirectivesModule, ComponentsModule],
  exports: [PipesModule, DirectivesModule, ComponentsModule],
})
export class DemosModule {}
