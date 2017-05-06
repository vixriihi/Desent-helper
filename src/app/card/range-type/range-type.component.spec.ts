import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeTypeComponent } from './range-type.component';

describe('RangeTypeComponent', () => {
  let component: RangeTypeComponent;
  let fixture: ComponentFixture<RangeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
