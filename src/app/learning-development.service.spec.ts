import { TestBed } from '@angular/core/testing';

import { LearningDevelopmentService } from './learning-development.service';

describe('LearningDevelopmentService', () => {
  let service: LearningDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
