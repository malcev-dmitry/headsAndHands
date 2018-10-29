import { TestBed } from '@angular/core/testing';

import { GetSortedDataService } from './get-sorted-data.service';

describe('GetSortedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSortedDataService = TestBed.get(GetSortedDataService);
    expect(service).toBeTruthy();
  });
});
