import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
 constructor( private Route : Router){

 }

 ProximaPag(){
  this.Route.navigate(['page-dois'])
 }
}
