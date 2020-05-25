import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizUiComponent } from './wiz-ui.component';

describe('WizUiComponent', () => {
  let component: WizUiComponent;
  let fixture: ComponentFixture<WizUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
