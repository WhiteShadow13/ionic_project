import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDisplayPage } from './task-display.page';

describe('TaskDisplayPage', () => {
  let component: TaskDisplayPage;
  let fixture: ComponentFixture<TaskDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
