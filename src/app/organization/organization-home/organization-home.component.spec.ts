import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationHomeComponent } from './organization-home.component';

describe('OrganizationHomeComponent', () => {
  let component: OrganizationHomeComponent;
  let fixture: ComponentFixture<OrganizationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
