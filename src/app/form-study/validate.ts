import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function forbiddenNameValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = reg.test(control.value);
    return forbidden
      ? { forbiddenName: { value: 'must not include bob!' } }
      : null;
  };
}

export function equalValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password');
  const rePassword = control.get('rePassword');
  return password?.value === rePassword?.value
    ? null
    : { equal: 'Two passwords are not equal!' };
}
