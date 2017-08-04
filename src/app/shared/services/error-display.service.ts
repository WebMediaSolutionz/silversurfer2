import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ErrorDisplayService {

  constructor(private sb: MdSnackBar) {}

  /**
   *
   * @param error
   * this method displays an error message within the "mdSnackBar", 
   * angular material's error prompt
   */
  public display(error: string = 'some error'): void {
    this.sb.open(error, 'close', {duration: 2000});
  }

  /**
   *
   * @param form
   * @param strictValidation
   * this method tells you how many errors a FormGroup has, setting the "strictValidation"
   * parameter to "true" will count all errors, setting to false makes it count only
   * fields that are invalid and that have also been "touched", if they have not been touched,
   * that field is not counted as an error
   */
  public getErrorCount(form: FormGroup, strictValidation: Boolean = false): number {
    let nbrOfErrors = 0;

    for (const key in form.controls) {
      if (form.controls[key].invalid) {
        if (strictValidation || form.controls[key].touched) {
          nbrOfErrors++;
        }
      }
    }

    return nbrOfErrors;
  }
}
