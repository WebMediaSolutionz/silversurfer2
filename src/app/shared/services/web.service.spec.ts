import { TestBed, inject } from '@angular/core/testing';

import { WebService } from './web.service';

describe('WebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebService]
    });
  });

  xit('should ...', inject([WebService], (service: WebService) => {
    expect(service).toBeTruthy();
  }));
});
