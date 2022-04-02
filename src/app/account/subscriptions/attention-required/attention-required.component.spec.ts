import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionRequiredComponent } from './attention-required.component';

describe('AttentionRequiredComponent', () => {
  let component: AttentionRequiredComponent;
  let fixture: ComponentFixture<AttentionRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
