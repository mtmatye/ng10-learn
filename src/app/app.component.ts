import {Component, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {TransferItem} from './demos/components/transfer-panel/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hero';
  vtuberName = 'Maturi';
  inputVal = '';

  theme = 'primary';
  isSuccess = true;

  showModal = false;

  fontSize = 16;

  textVal = '';
  @ViewChild(NgModel) private ngModel: NgModel;

  list: TransferItem[] = [];

  search = false;

  getVal(): number {
    return 39;
  }

  get job(): string {
    return 'vtuber';
  }

  onClose(): void {
    this.showModal = false;
  }

  onConfirm(): void {
    console.log('confirm');
  }

  getText(): void {
    console.log('--', this.ngModel.viewModel);
  }

  setVal(): void {
    this.ngModel.viewToModelUpdate('new val');
  }

  constructor() {
    this.setList();
  }

  setList(): void {
    this.list = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0
      });
    }
  }

  onChanged(selecteds: TransferItem[]): void {
    console.log(selecteds);
  }
}
