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
    this.defaultImage ='https://img.europapress.es/fotoweb/fotonoticia_20190210130713_1200.jpg';
  }

  ngOnInit(): void {
    console.log(this.list);
  }
}