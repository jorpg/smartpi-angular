import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoManualComponent } from './auto-manual.component';

describe('AutoManualComponent', () => {
  let component: AutoManualComponent;
  let fixture: ComponentFixture<AutoManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
