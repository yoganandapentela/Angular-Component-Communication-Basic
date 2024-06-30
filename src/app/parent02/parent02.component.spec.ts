import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent02Component } from './parent02.component';

describe('Parent02Component', () => {
  let component: Parent02Component;
  let fixture: ComponentFixture<Parent02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent02Component]
    });
    fixture = TestBed.createComponent(Parent02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
