import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styles: [
    `
      .h-spin-overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinComponent implements OnInit {
  @Input() show = false;
  constructor() {}

  ngOnInit(): void {}
}
