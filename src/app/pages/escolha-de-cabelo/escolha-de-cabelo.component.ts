import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ResultadosService } from 'src/app/resultados.service';

@Component({
  selector: 'app-escolha-de-cabelo',
  templateUrl: './escolha-de-cabelo.component.html',
  styleUrls: ['./escolha-de-cabelo.component.css']
})
export class EscolhaDeCabeloComponent {
  coilyActive: boolean = false;
  curlyActive: boolean = false;
  kinkyActive: boolean = false;
  buttonsEnabled: boolean = false;

  constructor(private route: Router, private resultService: ResultadosService) {

  }


  NextPage() {
    this.route.navigate(['type-hair'])
  }

  toggleCoily() {
    this.coilyActive = !this.coilyActive;
    this.buttonsEnabled = true;
    this.resultService.Resultado = []
    this.resultService.Resultado.push('Coily')
    console.log(this.resultService.Resultado)
    this.NextPage()
  }

  toggleCurly() {
    this.curlyActive = !this.curlyActive;
    this.buttonsEnabled = true;
    this.resultService.Resultado = []
    this.resultService.Resultado.push('Curly')
    console.log(this.resultService.Resultado)
    this.NextPage()


  }

  toggleKinky() {
    this.kinkyActive = !this.kinkyActive;
    this.buttonsEnabled = true;
    this.resultService.Resultado = []
    this.resultService.Resultado.push('Kinky')
    console.log(this.resultService.Resultado)
    this.NextPage()

  }
}
