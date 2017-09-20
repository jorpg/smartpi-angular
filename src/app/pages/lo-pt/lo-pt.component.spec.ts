import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoPtComponent } from './lo-pt.component';

describe('LoPtComponent', () => {
  let component: LoPtComponent;
  let fixture: ComponentFixture<LoPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
