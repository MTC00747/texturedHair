import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadosService } from 'src/app/resultados.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  button :any = {
    background : 'rgba(128, 128, 128, 0.2)',
    color: 'black'
  }
  icones = [
    { url: '/assets/images/combing.png', active: false, name : 'combing' },
    { url: '/assets/images/frizz-e-volume-control.png', active: false, name : 'control' },
    { url: '/assets/images/curls-definition.png', active: false, name : 'curls' },
    { url: '/assets/images/moisturization.png', active: false, name : 'moisturization' },
    { url: '/assets/images/smoothness.png', active: false, name : 'Smoothness' },
    { url: '/assets/images/shine.png', active: false, name : 'shine' },
    { url: '/assets/images/anti-hair-breakage.png', active: false, name : 'Breakage' },
    { url: '/assets/images/hair-resistance.png', active: false, name : 'resistance' },
    { url: '/assets/images/nutrition.png', active: false, name : 'Nutrition'  },
    { url: '/assets/images/anti-hair-fall-due.png', active: false, name : 'due' },
    { url: '/assets/images/thermal-protection.png', active: false, name : 'Thermal' },
    { url: '/assets/images/hair-growth.png', active: false, name : 'growth' },
  ]
  constructor(private viewportScroller: ViewportScroller, private route : Router, private  resultService : ResultadosService){
  }

  ngOnInit(): void {

  }

  buttonsEnabled: boolean = false
  Benefits: boolean = false;
  buttonActive: number[] = []


  Beneficio(i: number) {

    this.icones[i].active = !this.icones[i].active;
    this.Benefits = !this.Benefits;

    this.buttonActive.push(i)

 

    this.resultService.Resultado.push(this.icones[i].name)
    console.log(this.resultService.Resultado)


    if (this.buttonActive.length >= 5) {
      this.buttonsEnabled = true;
      this.button.background = 'black'
      this.button.color = 'white'
    } else {
      this.buttonsEnabled = false;
    }
  }
  nextPage(){
    const screenWidth = window.innerWidth;
    if (screenWidth > 480){
      this.route.navigate(['result-dois']);
    } else{
      this.route.navigate(['result'])
    }   
  }
}
