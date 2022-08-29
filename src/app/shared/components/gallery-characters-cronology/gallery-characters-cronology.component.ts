import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-characters-cronology',
  templateUrl: './gallery-characters-cronology.component.html',
  styleUrls: ['./gallery-characters-cronology.component.scss']
})
export class GalleryCharactersCronologyComponent implements OnInit {
  public defaultImage: string;
  
  @Input() list: any;
 
  constructor() {
    this.defaultImage='https://images.ecestaticos.com/l-QTTSrZraidt3kuLaBqXlConyI=/23x0:937x687/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc8c%2F11e%2Fe86%2Fc8c11ee865c08762417dc0fc922e19fe.jpg'
  }

  ngOnInit(): void {
    
    console.log(this.list)
  }
  ordenar(): void{
    console.log("Ordenado!");
    this.list.reverse();
  }
}