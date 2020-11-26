import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router) {}

  toCrisisCenter(): void {
    // this.router.navigateByUrl('/crisis-center');
    this.router.navigate(['./crisis-center']);
  }

  toHeroes(): void {
    this.router.navigateByUrl('/heroes');
  }
}
