/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('Capitalize Pipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(pipe).toBeTruthy();
    });
  });

  describe('transform()', () => {
    it('should capitalize string', () => {
      expect(pipe.transform('some text')).toBe('Some Text');
      expect(pipe.transform('some text')).not.toBe('some text');
      expect(pipe.transform('some text')).not.toBe('Some text');
      expect(pipe.transform('some text')).not.toBe('some Text');
    });
  });
});
