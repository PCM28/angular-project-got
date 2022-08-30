import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-houses',
  templateUrl: './gallery-houses.component.html',
  styleUrls: ['./gallery-houses.component.scss']
})
export class GalleryHousesComponent implements OnInit {
  public defaultImage: string;
  @Input() list: any;

  constructor() { 
    this.defaultImage ='https://i2.wp.com/clipset.com/wp-content/uploads/2016/01/game-of-thrones.jpg?fit=1024%2C576&ssl=1';
  }

  ngOnInit(): void {
    console.log(this.list);
  }
}