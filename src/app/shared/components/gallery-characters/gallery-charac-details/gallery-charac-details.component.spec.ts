import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCharacDetailsComponent } from './gallery-charac-details.component';

describe('GalleryCharacDetailsComponent', () => {
  let component: GalleryCharacDetailsComponent;
  let fixture: ComponentFixture<GalleryCharacDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCharacDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCharacDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
