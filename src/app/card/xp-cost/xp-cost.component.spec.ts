import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpCostComponent } from './xp-cost.component';

describe('XpCostComponent', () => {
  let component: XpCostComponent;
  let fixture: ComponentFixture<XpCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
