import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child02Component } from './child02.component';

describe('Child02Component', () => {
  let component: Child02Component;
  let fixture: ComponentFixture<Child02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child02Component]
    });
    fixture = TestBed.createComponent(Child02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
