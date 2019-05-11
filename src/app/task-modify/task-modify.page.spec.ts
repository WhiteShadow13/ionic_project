import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModifyPage } from './task-modify.page';

describe('TaskModifyPage', () => {
  let component: TaskModifyPage;
  let fixture: ComponentFixture<TaskModifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskModifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskModifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
