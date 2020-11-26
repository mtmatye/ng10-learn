import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page' },
    children: [
      {
        path: 'heroes',
        component: HerosComponent,
        data: { title: 'Heroes List', breadcrumb: ['Home', 'Heroes List'] },
      },
      {
        path: 'add-hero',
        loadChildren: () =>
          import('./add-hero/add-hero.module').then((m) => m.AddHeroModule),
        data: { tile: 'Add Hero', breadcrumb: ['Home', 'Add Hero'] },
      },
      {
        path: 'modify-hero',
        loadChildren: () =>
          import('./modify-hero/modify-hero.module').then(
            (m) => m.ModifyHeroModule
          ),
        data: { tile: 'Modify Hero', breadcrumb: ['Home', 'Modify Hero'] },
      },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
