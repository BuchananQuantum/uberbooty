import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowListingComponent } from './follow-listing.component';

describe('FollowListingComponent', () => {
  let component: FollowListingComponent;
  let fixture: ComponentFixture<FollowListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
