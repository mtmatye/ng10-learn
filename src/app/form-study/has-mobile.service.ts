import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { iif, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasMobileService implements AsyncValidator {
  constructor() {}
  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    const random = Math.random();
    console.log('🚀 ~ random', random);
    return iif(
      () => random > 0.5,
      of({ exist: 'Mobile number already exist!' }),
      of(null)
    );
  }
  registerOnValidatorChange?(fn: () => void): void {
    console.log('validator change');
  }
}
