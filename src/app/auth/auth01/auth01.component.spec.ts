import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth01Component } from './auth01.component';

describe('Auth01Component', () => {
  let component: Auth01Component;
  let fixture: ComponentFixture<Auth01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth01Component]
    });
    fixture = TestBed.createComponent(Auth01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
