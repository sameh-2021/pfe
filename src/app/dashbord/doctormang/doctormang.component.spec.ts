import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctormangComponent } from './doctormang.component';

describe('DoctormangComponent', () => {
  let component: DoctormangComponent;
  let fixture: ComponentFixture<DoctormangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctormangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctormangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
