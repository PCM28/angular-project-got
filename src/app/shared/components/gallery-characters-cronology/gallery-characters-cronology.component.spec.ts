import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCharactersCronologyComponent } from './gallery-characters-cronology.component';

describe('GalleryCharactersCronologyComponent', () => {
  let component: GalleryCharactersCronologyComponent;
  let fixture: ComponentFixture<GalleryCharactersCronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCharactersCronologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCharactersCronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
