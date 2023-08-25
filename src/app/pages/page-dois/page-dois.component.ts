import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-dois',
  templateUrl: './page-dois.component.html',
  styleUrls: ['./page-dois.component.css']
})
export class PageDoisComponent {
  constructor(private route : Router){

  }

  NextPage(){
    this.route.navigate(['Form'])
  }
}
