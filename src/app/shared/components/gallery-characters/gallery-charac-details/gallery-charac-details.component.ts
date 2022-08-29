import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-gallery-charac-details',
  templateUrl: './gallery-charac-details.component.html',
  styleUrls: ['./gallery-charac-details.component.scss']
})
export class GalleryCharacDetailsComponent implements OnInit {

  nameDetails:any

  constructor(private route: ActivatedRoute, private  charactersService: CharactersService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params) => {
      console.log(params.get("name"))
      this.charactersService.getCharactersDetails(params.get("name")). subscribe((res: any) =>{
        this.nameDetails = res;
        console.log(res);
      }
      )
    })
  }
}
