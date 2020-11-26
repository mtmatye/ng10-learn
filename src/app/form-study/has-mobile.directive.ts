import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HasMobileService } from './has-mobile.service';

@Directive({
  selector: '[appHasMobile]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: HasMobileDirective,
      multi: true,
    },
  ],
})
export class HasMobileDirective implements AsyncValidator {
  constructor(private hasMobileServe: HasMobileService) {}
  validate(
    control: AbstractControl
  ): Observable<ValidationErrors> | Promise<ValidationErrors> | null {
    return this.hasMobileServe.validate(control);
  }
}
