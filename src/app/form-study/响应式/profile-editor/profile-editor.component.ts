import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HasMobileService } from '../has-mobile.service';

function forbiddenNameValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log('control', control);
    const forbidden = reg.test(control.value);
    return forbidden
      ? { forbiddenName: { value: 'must not include bob!' } }
      : null;
  };
}

function equalValidator(group: FormGroup): ValidationErrors | null {
  const password = group.get('password');
  const rePassword = group.get('rePassword');
  return password.value === rePassword.value
    ? null
    : { equal: 'Two passwords are not equal!' };
}

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditorComponent implements OnInit {
  profileForm2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      ],
    ],
    mobile: [
      '',
      // [Validators.required, Validators.pattern(/^\d{11}$/)],
      // this.hasMobileServe.validate,
      {
        validators: [Validators.required, Validators.pattern(/^\d{11}$/)],
        asyncValidators: this.hasMobileServe.validate,
        updateOn: 'blur',
      },
    ],
    newPass: this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
          ],
        ],
        rePassword: ['', [Validators.required]],
      },
      { validators: equalValidator }
    ),
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: [''],
    // }),
    // aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  get firstName(): AbstractControl {
    return this.profileForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.profileForm.get('lastName');
  }

  get mobile(): AbstractControl {
    return this.profileForm.get('mobile');
  }

  get newPass(): AbstractControl {
    return this.profileForm.get('newPass');
  }

  constructor(
    private fb: FormBuilder,
    private hasMobileServe: HasMobileService
  ) {}

  ngOnInit(): void {}

  updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: 'Australia',
      },
    });
  }

  updateProfile2(): void {
    this.profileForm.setValue({
      firstName: 'Nancy',
      lastName: 'kagura',
      address: {
        street: 'Australia',
      },
    });
  }

  addAliaes(): void {
    this.aliases.push(this.fb.control('test'));
  }
}
