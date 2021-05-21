import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpcontentComponent } from './warpcontent.component';

describe('WarpcontentComponent', () => {
  let component: WarpcontentComponent;
  let fixture: ComponentFixture<WarpcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarpcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarpcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
