import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-GOT-proyect';
  current: string = "";
  constructor(private router:Router){
    this.router.events.subscribe((event: Event) => {        
      if (event instanceof NavigationEnd) {           
         this.current= event.url;              
         console.log(event);        
      }});

    }
}