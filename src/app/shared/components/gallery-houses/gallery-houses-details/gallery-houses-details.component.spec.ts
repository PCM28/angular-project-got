import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHousesDetailsComponent } from './gallery-houses-details.component';

describe('GalleryHousesDetailsComponent', () => {
  let component: GalleryHousesDetailsComponent;
  let fixture: ComponentFixture<GalleryHousesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryHousesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryHousesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
