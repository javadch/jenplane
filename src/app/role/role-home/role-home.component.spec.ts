import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHomeComponent } from './role-home.component';

describe('RoleHomeComponent', () => {
  let component: RoleHomeComponent;
  let fixture: ComponentFixture<RoleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
