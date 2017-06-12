import { ErrorDisplayService } from './error-display.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('ErrorDisplay Service', () => {
  let errorDisplayService: ErrorDisplayService;

  beforeEach(() => {
    errorDisplayService = new ErrorDisplayService();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(errorDisplayService).toBeDefined();
    });
  });

  describe(`display()`, () => {
    it('should display error message', () => {
      let spy = spyOn( console, 'info' );
      let errMsg = `some error messager`;
      let result = errorDisplayService.display(`some error messager`);

      expect(spy).toHaveBeenCalled();
      expect(result).toBe(`outputed: ${errMsg}`);
    });
  });

  describe(`getErrorCount()`, () => {
    it('should display right error message', () => {
      let someString = 'hello world';
      let result = errorDisplayService.display(someString);

      expect(result).toBe(`outputed: ${someString}`);
    });

    it('should return the right number of form errors', () => {
      let form = new FormGroup({
        firstField: new FormControl('', Validators.maxLength(2)),
        secondField: new FormControl('', Validators.maxLength(2)),
        thirdField: new FormControl('', Validators.maxLength(2))
      });

      form.setValue({
        firstField: 'b',
        secondField: 'bl',
        thirdField: 'blah'
      });

      expect(errorDisplayService.getErrorCount(form, true)).toBe(1);

      form.setValue({
        firstField: 'b',
        secondField: 'b',
        thirdField: 'b'
      });

      expect(errorDisplayService.getErrorCount(form, true)).toBe(0);

      form.setValue({
        firstField: 'blah',
        secondField: 'blah',
        thirdField: 'blah'
      });

      expect(errorDisplayService.getErrorCount(form, true)).toBe(3);
      expect(errorDisplayService.getErrorCount(form)).toBe(0);
    });
  });
});
