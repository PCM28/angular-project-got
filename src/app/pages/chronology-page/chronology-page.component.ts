import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss']
})
export class ChronologyPageComponent implements OnInit {
  filteredList: any[];
  constructor(private charactersService: CharactersService) { 
    this.filteredList = [];
  }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((res: any) => {

      this.filteredList = res.filter(check);

      function check(res:any){
        if(res?.age?.age) return res;
      }
      console.log(this.filteredList);

      this.filteredList = this.filteredList.sort((a:any, b:any)=>{
        return a?.age?.age - b?.age?.age;
      });

  })};

}
