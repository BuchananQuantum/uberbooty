import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerSettingsComponent } from './messenger-settings.component';

describe('MessengerSettingsComponent', () => {
  let component: MessengerSettingsComponent;
  let fixture: ComponentFixture<MessengerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
