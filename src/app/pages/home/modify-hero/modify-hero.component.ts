import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-modify-hero',
  templateUrl: './modify-hero.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifyHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
