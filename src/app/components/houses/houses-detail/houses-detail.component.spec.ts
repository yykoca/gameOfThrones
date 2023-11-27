import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesDetailComponent } from './houses-detail.component';

describe('HousesDetailComponent', () => {
  let component: HousesDetailComponent;
  let fixture: ComponentFixture<HousesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
