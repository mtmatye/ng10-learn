import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCanDeactiveGuard } from 'src/app/services/guards/hero-can-deactive.guard';
import { AddHeroComponent } from './add-hero.component';

const routes: Routes = [
  {
    path: '',
    component: AddHeroComponent,
    canDeactivate: [HeroCanDeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHeroRoutingModule {}
