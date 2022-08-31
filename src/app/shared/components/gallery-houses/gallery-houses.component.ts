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
    this.defaultImage ='https://res.cloudinary.com/dulzlnv9t/image/upload/v1661972673/Horde_Crest_cadfja.webp';
  }

  ngOnInit(): void {
    console.log(this.list);
  }
}