import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ResultadosService } from '../resultados.service';

@Component({
  selector: 'app-type-hair',
  templateUrl: './type-hair.component.html',
  styleUrls: ['./type-hair.component.css']
})
export class TypeHairComponent {
  curlyActive: boolean = false;
  coilyActive: boolean = false;
  buttonsEnabled: boolean = false;

  constructor(private location: Location, private route : Router, private resultService : ResultadosService) { }

  Back() {
    this.location.back();
  }
  NextPage(){
    this.route.navigate(['benefits'])
  }
  toggleCoily() {
    this.coilyActive = !this.coilyActive;
    this.buttonsEnabled = true;
    const index = this.resultService.Resultado.indexOf('Balanced');
    if (index !== -1) {
      this.resultService.Resultado.splice(index, 1);
    }

    this.resultService.Resultado.push('Oil')
    console.log(this.resultService.Resultado)
    this.NextPage()
  }

  toggleCurly() {
    this.curlyActive = !this.curlyActive;
    this.buttonsEnabled = true;

    const index = this.resultService.Resultado.indexOf('Oil');
    if (index !== -1) {
      this.resultService.Resultado.splice(index, 1);
    }
    this.resultService.Resultado.push('Balanced')
    console.log(this.resultService.Resultado)
    this.NextPage()
  }
}
