import { TestBed } from '@angular/core/testing';

import { WizService } from './wiz.service';

describe('WizService', () => {
  let service: WizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
