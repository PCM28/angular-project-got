import { GalleryHousesComponent } from './shared/components/gallery-houses/gallery-houses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GalleryCharacDetailsComponent } from './shared/components/gallery-characters/gallery-charac-details/gallery-charac-details.component';
import { GalleryHousesDetailsComponent } from './shared/components/gallery-houses/gallery-houses-details/gallery-houses-details.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GalleryCharactersCronologyComponent } from './shared/components/gallery-characters-cronology/gallery-characters-cronology.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HousesPageComponent,
    CharactersPageComponent,
    ChronologyPageComponent,
    GalleryCharactersComponent,
    FooterComponent,
    GalleryHousesComponent,
    GalleryCharacDetailsComponent,
    GalleryHousesDetailsComponent,
    GalleryCharactersCronologyComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
