import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User01Component } from './user01.component';

describe('User01Component', () => {
  let component: User01Component;
  let fixture: ComponentFixture<User01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User01Component]
    });
    fixture = TestBed.createComponent(User01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
