import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningOkComponent } from './warning-ok.component';

describe('WarningOkComponent', () => {
  let component: WarningOkComponent;
  let fixture: ComponentFixture<WarningOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
