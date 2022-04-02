import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoggedInComponent } from './header-logged-in.component';

describe('HeaderLoggedInComponent', () => {
  let component: HeaderLoggedInComponent;
  let fixture: ComponentFixture<HeaderLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
