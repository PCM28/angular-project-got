import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {

  houses = []

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((res: any) => {

      console.log(res);
      
      
      this.houses = res;

  })}

}
