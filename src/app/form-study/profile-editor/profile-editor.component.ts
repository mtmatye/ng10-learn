import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

class Profile {
  constructor(
    public firstName: string,
    public lastName: string,
    public mobile: string,
    public password: string,
    public rePassword: string
  ) {}
}

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditorComponent implements OnInit {
  model = new Profile('', '', '', '', '');
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    console.log('submit value', f.value);
  }

  onReset(f: NgForm): void {
    f.reset({ firstName: 'aaa', lastName: 'bbb', password: 'ccc' });
  }
}
