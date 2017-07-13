import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  public isInteger = (control: FormControl): {[key: string]: boolean} => {
    let nbr = control.value;
    let errorObj = {isInteger: true};

    if (nbr.length === 0) {
      return null;
    }

    return Number.isInteger(parseInt(nbr, 10)) ? null : errorObj;
  }

  public isPositiveInteger = (control: FormControl): {[key: string]: boolean} => {
    let errorObj = {isPositiveInteger: true};

    return ( this.isInteger(control) === null && <number> control.value >= 0 ) ?
      null : errorObj;
  }

  public specialCharValidator = (control: FormControl): {[key: string]: boolean} => {
    let errorObj = {specialCharValidator: true};

    if (control.value) {
      return (!control.value.match(/[-!$%^&*()_+|~=`{}\[\]:"#@'<>\/]/)) ?
        null : errorObj;
	  }
  }

}
