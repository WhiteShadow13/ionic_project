import { TestBed } from '@angular/core/testing';

import { CategoriesServService } from './categories-serv.service';

describe('CategoriesServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesServService = TestBed.get(CategoriesServService);
    expect(service).toBeTruthy();
  });
});
