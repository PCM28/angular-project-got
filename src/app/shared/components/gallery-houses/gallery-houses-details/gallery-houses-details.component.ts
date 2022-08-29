import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-gallery-houses-details',
  templateUrl: './gallery-houses-details.component.html',
  styleUrls: ['./gallery-houses-details.component.scss']
})
export class GalleryHousesDetailsComponent implements OnInit {

  housesDetails:any

  constructor(private route: ActivatedRoute, private  housesService: HousesService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
      console.log(params.get("name"))
      this.housesService.getHousesDetails(params.get("name")). subscribe((res: any) =>{
        this.housesDetails = res[0];
        console.log(res);
      }
      )
    })
  }
}
