import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDisplayPage } from './category-display.page';

describe('CategoryDisplayPage', () => {
  let component: CategoryDisplayPage;
  let fixture: ComponentFixture<CategoryDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
