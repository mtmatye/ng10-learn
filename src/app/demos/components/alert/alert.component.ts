import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

type AlertTheme = 'primary' | 'warning' | 'info' | 'danger';
export interface AlertOptions {
  content: string;
  theme?: AlertTheme;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [
    `
      .close {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -14px;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit {
  options: Required<AlertOptions> = {
    content: '  ',
    theme: 'info',
  };
  @Output() closed = new EventEmitter<void>();


  get wrapCls(): string {
    return `alert alert-${this.options.theme}`;
  }

  ngOnInit(): void {}

  setOptions(options: AlertOptions): void {
    this.options = { ...this.options, ...options };
    // this.options = options as Required<AlertOptions>;
  }
}
