import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmangComponent } from './patientmang.component';

describe('PatientmangComponent', () => {
  let component: PatientmangComponent;
  let fixture: ComponentFixture<PatientmangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientmangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
