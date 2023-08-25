import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent {
constructor(private route : Router){

}
restart(){
  this.route.navigate([''])
}
}
