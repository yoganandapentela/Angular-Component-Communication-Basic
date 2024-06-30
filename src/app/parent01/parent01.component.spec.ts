import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent01Component } from './parent01.component';

describe('Parent01Component', () => {
  let component: Parent01Component;
  let fixture: ComponentFixture<Parent01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent01Component]
    });
    fixture = TestBed.createComponent(Parent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
