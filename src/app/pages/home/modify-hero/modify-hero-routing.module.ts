import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyHeroComponent } from './modify-hero.component';

const routes: Routes = [
  {
    path: '',
    component: ModifyHeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyHeroRoutingModule {}
