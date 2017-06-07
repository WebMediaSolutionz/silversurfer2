import { ValidationService } from './validation.service';
import { FormControl } from '@angular/forms';

describe('Validation Service', () => {
  let validationService: ValidationService;

  beforeEach(() => {
    validationService = new ValidationService();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(validationService).toBeDefined();
    });
  });

  describe(`isInteger()`, () => {
    it('should indicate if formControl contains integer value', () => {
      let formControlInt: FormControl = new FormControl('123');
      let formControlStr: FormControl = new FormControl('abc');
      let formControlMixte1: FormControl = new FormControl('abc123');

      let result1 = ( validationService.isInteger(formControlInt) === null );
      let result2 = ( validationService.isInteger(formControlStr) === null );
      let result3 = ( validationService.isInteger(formControlMixte1) === null );

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
      expect(result3).toBeFalsy();
    });
  });

  describe(`isPositiveInteger()`, () => {
    it('should indicate if formControl contains positive integer value', () => {
      let formControlInt: FormControl = new FormControl('123');
      let formControlStr: FormControl = new FormControl('abc');
      let formControlMixte: FormControl = new FormControl('abc123');
      let formControlZero: FormControl = new FormControl('0');
      let formControlNegative: FormControl = new FormControl('-1212');

      let result1 = ( validationService.isPositiveInteger(formControlInt) === null );
      let result2 = ( validationService.isPositiveInteger(formControlStr) === null );
      let result3 = ( validationService.isPositiveInteger(formControlMixte) === null );
      let result4 = ( validationService.isPositiveInteger(formControlZero) === null );
      let result5 = ( validationService.isPositiveInteger(formControlNegative) === null );

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
      expect(result3).toBeFalsy();
      expect(result4).toBeTruthy();
      expect(result5).toBeFalsy();
    });
  });

  describe(`specialCharValidator()`, () => {
    it('should indicate if formControl contains any special characters', () => {
      // must write more useed cases to fully test limits of so called 'special characters',
      // needs to be defined more toroughly
      let formControlSpecialChar: FormControl = new FormControl('@@@');
      let formControlNoSpecialChar: FormControl = new FormControl('abc');

      let result1 = ( validationService.specialCharValidator(formControlSpecialChar) === null );
      let result2 = ( validationService.specialCharValidator(formControlNoSpecialChar) === null );

      expect(result1).toBeFalsy();
      expect(result2).toBeTruthy();
    });
  });
});
