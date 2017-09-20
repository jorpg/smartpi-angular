import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiPtComponent } from './hi-pt.component';

describe('HiPtComponent', () => {
  let component: HiPtComponent;
  let fixture: ComponentFixture<HiPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
