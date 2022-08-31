import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 

  constructor(public translate: TranslateService) {
    translate.addLangs(['es','en']);
    translate.setDefaultLang('es');
  
}

  ngOnInit(): void {  
     
  }
useLang(language: string): void {
  this.translate.use(language);
}

}
