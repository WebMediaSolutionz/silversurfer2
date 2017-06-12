import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ErrorDisplayService {

  public display(error: String = 'some error'): String {

    // TODO: replace this by actual error display code
    console.info(error);

    return `outputed: ${error}`;
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
