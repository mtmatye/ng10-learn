import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AddHeroComponent } from 'src/app/pages/home/add-hero/add-hero.component';

@Injectable({
  providedIn: 'root',
})
export class HeroCanDeactiveGuard implements CanDeactivate<AddHeroComponent> {
  canDeactivate(
    component: AddHeroComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canDeactive();
  }
}
