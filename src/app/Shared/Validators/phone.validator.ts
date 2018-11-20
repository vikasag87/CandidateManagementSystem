import { FormControl } from '@angular/forms';

export class PhoneValidator {
  static validatePhone(fc: FormControl){
    if(fc.value.pattern('[0-9]+') && fc.value.length === 10){
      return ({validatePhone: true});
    } else {
      return (null);
    }
  }
}