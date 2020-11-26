import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './router-study/compose-message/compose-message.component';
import { NotFoundComponent } from './router-study/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/home/heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/heroes' },
];

const namedRoutes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  // imports: [
  //   RouterModule.forRoot(appRoutes.concat(namedRoutes), {
  //     // enableTracing: true
  //     // onSameUrlNavigation: 'reload'
  //   }),
  // ],
  // imports: [RouterModule.forRoot(appRoutes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
