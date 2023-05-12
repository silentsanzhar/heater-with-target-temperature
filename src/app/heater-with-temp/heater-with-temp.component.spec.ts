import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterWithTempComponent } from './heater-with-temp.component';

describe('HeaterWithTempComponent', () => {
  let component: HeaterWithTempComponent;
  let fixture: ComponentFixture<HeaterWithTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaterWithTempComponent]
    });
    fixture = TestBed.createComponent(HeaterWithTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
