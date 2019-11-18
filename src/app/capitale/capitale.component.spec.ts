import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitaleComponent } from './capitale.component';

describe('CapitaleComponent', () => {
  let component: CapitaleComponent;
  let fixture: ComponentFixture<CapitaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
