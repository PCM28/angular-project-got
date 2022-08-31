import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allCharacters: any[] = [];
  filteredCharacters: any[] = [];
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((res: any) => {
      console.log(res);
      this.allCharacters = res as any[];
      this.filteredCharacters = this.allCharacters;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.filteredCharacters = this.allCharacters.filter(
      (c) => c.name.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
console.log(event)
console.log(this.filteredCharacters)

  }
}
