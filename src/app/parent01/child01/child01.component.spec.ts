import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child01Component } from './child01.component';

describe('Child01Component', () => {
  let component: Child01Component;
  let fixture: ComponentFixture<Child01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child01Component]
    });
    fixture = TestBed.createComponent(Child01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
