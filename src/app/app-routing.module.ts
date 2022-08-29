import { GalleryHousesDetailsComponent } from './shared/components/gallery-houses/gallery-houses-details/gallery-houses-details.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryCharacDetailsComponent } from './shared/components/gallery-characters/gallery-charac-details/gallery-charac-details.component';

const routes: Routes = [
{path: "", component: HomePageComponent},
{path: "characters", component: CharactersPageComponent},
{path: "houses", component: HousesPageComponent},
{path: "chronology", component: ChronologyPageComponent},
{path: "character/:name", component: GalleryCharacDetailsComponent},
{path: "houses/:name", component: GalleryHousesDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
