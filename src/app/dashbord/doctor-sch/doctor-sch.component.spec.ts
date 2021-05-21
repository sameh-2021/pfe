import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSCHComponent } from './doctor-sch.component';

describe('DoctorSCHComponent', () => {
  let component: DoctorSCHComponent;
  let fixture: ComponentFixture<DoctorSCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSCHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
