import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ErrorDisplayService {

  constructor(private sb: MdSnackBar) {}

  public display(error: string = 'some error'): void {
    this.sb.open(error, 'close', {duration: 2000});
  }

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
