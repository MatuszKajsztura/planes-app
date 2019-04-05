import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFlightDetailsComponent } from './basic-flight-details.component';

describe('BasicFlightDetailsComponent', () => {
  let component: BasicFlightDetailsComponent;
  let fixture: ComponentFixture<BasicFlightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFlightDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
