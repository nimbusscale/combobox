import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateComboboxComponent } from './state-combobox.component';

describe('StateComboboxComponent', () => {
  let component: StateComboboxComponent;
  let fixture: ComponentFixture<StateComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateComboboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
