import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOutletComponent } from './admin-outlet.component';

describe('AdminOutletComponent', () => {
  let component: AdminOutletComponent;
  let fixture: ComponentFixture<AdminOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
