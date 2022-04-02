import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BliingComponent } from './bliing.component';

describe('BliingComponent', () => {
  let component: BliingComponent;
  let fixture: ComponentFixture<BliingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BliingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BliingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
