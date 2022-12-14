import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get("https://api.got.show/api/show/characters/")
  }

  getCharactersDetails(name: any) {
    return this.http.get(`https://api.got.show/api/show/characters/${name}`);
  }
}

