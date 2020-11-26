import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  @Input('visible') show = false;
  @Input() title = '提示';
  @Input() confirmBtn = '确认';
  @Input() cancelBtn = '取消';
  @Output() modalClose = new EventEmitter<void>();
  @Output() backdropClick = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void | string>();

  constructor() {}

  ngOnInit(): void {
    this.confirm.subscribe((val) => {
      console.log('inner confirm', val);
    });
  }

  onClose(): void {
    this.modalClose.emit();
  }

  onCancel(): void {
    this.modalClose.emit();
  }

  onConfirm(): void {
    // this.confirm.next('next more');
    this.confirm.emit('more and more');
  }
  onInput(e): void {
    const val = (e.target as HTMLInputElement).value;
    console.log('DialogComponent -> onInput -> val', val);
  }
}
