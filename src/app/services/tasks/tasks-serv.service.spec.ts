import { TestBed } from '@angular/core/testing';

import { TasksServService } from './tasks-serv.service';

describe('TasksServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksServService = TestBed.get(TasksServService);
    expect(service).toBeTruthy();
  });
});
