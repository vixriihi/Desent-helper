import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WornComponent } from './worn.component';

describe('WornComponent', () => {
  let component: WornComponent;
  let fixture: ComponentFixture<WornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
