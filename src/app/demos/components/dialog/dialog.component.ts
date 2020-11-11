import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input('visible') show = false;
  @Input() title = '';
  @Input() confirmBtn = '确认';
  @Input() cancelBtn = '取消';
  @Output() modalClose = new EventEmitter<void>();
  @Output() backdropClick = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.modalClose.emit();
  }

  onCancel(): void {
    this.modalClose.emit();
  }

  onInput(e): void {
    const val = (e.target as HTMLInputElement).value;
    console.log('DialogComponent -> onInput -> val', val);
  }
}
