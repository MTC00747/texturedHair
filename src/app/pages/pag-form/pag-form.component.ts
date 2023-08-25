import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ResultadosService } from 'src/app/resultados.service';

@Component({
  selector: 'app-pag-form',
  templateUrl: './pag-form.component.html',
  styleUrls: ['./pag-form.component.css']
})
export class PagFormComponent {
  email : string = ''
  academicTitle : string = ''
  firstName : string = ''
  lastName : string = ''
  company : string =''
  phone : string = ''
  privacyAgreed: boolean = false;

  
  constructor(private formResult : ResultadosService, private Route : Router){
    this.Route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
    
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  NextPage(){
    if(this.email === '' && this.privacyAgreed ===false){
      alert('Fill in all fields!')
      console.log(this.formResult.form.firstName)
    }else{
      this.formResult.form.email =  this.email
      this.formResult.form.academicTitle = this.academicTitle 
      this.formResult.form.firstName = this.firstName  
      this.formResult.form.LastName = this.lastName  
      this.formResult.form.company = this.company 
      this.formResult.form.phone =  this.phone 

      this.Route.navigate(['Escolha-de-Cabelo'])
    }
  }
}
