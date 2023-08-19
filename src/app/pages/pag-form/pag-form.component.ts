import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-form',
  templateUrl: './pag-form.component.html',
  styleUrls: ['./pag-form.component.css']
})
export class PagFormComponent {
  email : string = ''
  
  constructor(private Route : Router){
    
  }
  NextPage(){
    if(this.email === ''){
      alert('Preencha todos os campos!')
    }else{
      this.Route.navigate(['Escolha-de-Cabelo'])
    }
  }
}
