import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  setName(): void {
    this.name.setValue('Nancy');
  }
}
