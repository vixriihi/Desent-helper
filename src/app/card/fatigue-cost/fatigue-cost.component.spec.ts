import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatigueCostComponent } from './fatigue-cost.component';

describe('FatigueCostComponent', () => {
  let component: FatigueCostComponent;
  let fixture: ComponentFixture<FatigueCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatigueCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatigueCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
