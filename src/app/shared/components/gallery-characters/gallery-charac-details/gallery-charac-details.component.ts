import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-gallery-charac-details',
  templateUrl: './gallery-charac-details.component.html',
  styleUrls: ['./gallery-charac-details.component.scss']
})
export class GalleryCharacDetailsComponent implements OnInit {

  nameDetails:any
  housesDetails:any

  constructor(private route: ActivatedRoute, private  charactersService: CharactersService, private housesServices: HousesService) { 
    
  }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
      console.log(params.get("name"))
      this.charactersService.getCharactersDetails(params.get("name")). subscribe((res: any) =>{
        this.nameDetails = res;
        console.log(res);
      }
      )
      this.housesServices.getHouses().subscribe((res: any) => {
        this.housesDetails=res;
        console.log(this.housesDetails);
    })
  })
  }
}
