import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/resultados.service';

@Component({
  selector: 'app-result1',
  templateUrl: './result1.component.html',
  styleUrls: ['./result1.component.css']
})
export class Result1Component implements OnInit {
  image: string = ''

  Mid: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  After: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Treatment: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Leave: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Mask: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white',

  };
  Cream: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Jelly: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };

  Milk: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Tonic: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'transparent',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };


  TextoUm: boolean = false;
  TextoDois: boolean = false;
  TextoTres: Boolean = false;
  TextoQuatro: boolean = false;
  TextoQuinto: boolean = false;
  TextoSexto: boolean = false;
  TextoSetimo: boolean = false;
  TextoOito: boolean = false
  TextoNono: boolean = false


  curly = this.resultService.Resultado.includes('Curly')
  coily = this.resultService.Resultado.includes('Coily')
  Kinky = this.resultService.Resultado.includes('Kinky')

  Oil = this.resultService.Resultado.includes('Oil')
  Balanced = this.resultService.Resultado.includes('Balanced')


  Breakage = this.resultService.Resultado.includes('Breakage')
  resistance = this.resultService.Resultado.includes('resistance')
  due = this.resultService.Resultado.includes('due')
  Nutrition = this.resultService.Resultado.includes('Nutrition')

  growth = this.resultService.Resultado.includes('growth')
  Thermal = this.resultService.Resultado.includes('Thermal')

  constructor(private resultService: ResultadosService) {








  }
  ngOnInit(): void {
    this.verficarPrimeiro()
    this.verificarDois()
    this.verficarTres()
    this.VerificarQuarto()
    this.verificarQuinto()
  }

  //Curly-Oily
  verficarPrimeiro() {
    if (this.curly && this.Oil && this.growth || this.Thermal) {

      this.image = '/assets/images/Curly-oily-03.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = true;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    } else if (this.curly && this.Oil && this.Breakage || this.resistance || this.due || this.Nutrition) {

      this.image = '/assets/images/Curly-oily-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }

    const resultOne = ['Curly', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValores = resultOne.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValores) {
      this.image = '/assets/images/Curly-oily-01.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
  }

  //Curly-Balanced
  verificarDois() {
    if (this.curly && this.Balanced && this.growth || this.Thermal) {

      this.image = '/assets/images/Curly-balanced-03.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = true;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    } else if (this.curly && this.Balanced && this.Breakage || this.resistance || this.due || this.Nutrition) {

      this.image = '/assets/images/Curly-balanced-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
    const resultFour = ['Curly', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValoresFour = resultFour.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresFour) {
      this.image = '/assets/images/Curly-balanced-01.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
  }


  //Coily-Oil
  verficarTres() {
    if (this.coily && this.Oil && this.growth || this.Thermal) {
      this.image = '/assets/images/Coily-oily-03.png'
      this.Mid.visivel = true;
      this.Cream.visivel = false;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = true;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    } else if (this.coily && this.Oil && this.Breakage || this.resistance || this.due || this.Nutrition) {
      this.image = '/assets/images/Coily-oily-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = false;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }

    const resultSeven = ['Coily', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValoresSeven = resultSeven.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresSeven) {
      this.image = '/assets/images/Coily/coily-oily-01.png'
      this.image = '/assets/images/Coily-oily-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
  }

  //Coily-Balanced
  VerificarQuarto() {
    if (this.coily && this.Balanced && this.growth || this.Thermal) {
      this.image = '/assets/images/Coily-balanced-03.png'
      this.Mid.visivel = true;
      this.Cream.visivel = false;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = true;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = true;
      this.Milk.visivel = true;
    } else if (this.coily && this.Balanced && this.Breakage || this.resistance || this.due || this.Nutrition) {
      this.image = '/assets/images/Coily-balanced-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = false;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = true;
      this.Milk.visivel = true;
    }

    const resultTeen = ['Coily', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'shine']
    const todosOsValoresTeen = resultTeen.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresTeen) {
      this.image = '/assets/images/Coily/coily-balanced-01.png'

      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = true;
      this.Milk.visivel = true;
    }
  }

  //Kinky-oil
  verificarQuinto() {
    if (this.Kinky && this.Oil && this.growth || this.Thermal) {
      this.image = '/assets/images/Kinky/kink-oily-03.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = false;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    } else if (this.Kinky && this.Oil && this.Breakage || this.resistance || this.due || this.Nutrition) {

      this.image = '/assets/images/Kinky/kink-oily-02.png'
      this.Mid.visivel = true;
      this.Cream.visivel = false;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = true;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
    const resultTreze = ['Kinky', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'shine']
    const todosOsValoresTreze = resultTreze.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresTreze) {
      this.image = '/assets/images/Kinky/kink-oily-01.png'
      this.Mid.visivel = true;
      this.Cream.visivel = true;
      this.After.visivel = true;
      this.Jelly.visivel = true;
      this.Tonic.visivel = false;
      this.Mask.visivel = true;
      this.Treatment.visivel = true;
      this.Leave.visivel = false;
      this.Milk.visivel = false;
    }
  }


    //Kinky-Balanced
    verificarSexto(){
      if (this.Kinky && this.Balanced && this.growth || this.Thermal) {
          this.image = '/assets/images/Kinky/kink-balanced-03.png'
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;
        }else if (this.Kinky && this.Balanced && this.Breakage || this.resistance || this.due || this.Nutrition) {
          this.image = '/assets/images/Kinky/kink-balanced-02.png'
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;
        }
      

      const resultDezesseis = ['Kinky', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'shine']
      const todosOsValoresDezesseis = resultDezesseis.every(valor => this.resultService.Resultado.includes(valor))
      if (todosOsValoresDezesseis) {
        this.image = '/assets/images/Kinky/kink-balanced-01.png'
        this.Mid.visivel = true;
        this.Cream.visivel = true;
        this.After.visivel = true;
        this.Jelly.visivel = true;
        this.Tonic.visivel = false;
        this.Mask.visivel = true;
        this.Treatment.visivel = true;
        this.Leave.visivel = true;
        this.Milk.visivel = false;
      }
    }


  expandDivUm() {
    this.Mid.width = '55vh';
    this.TextoUm = true;
    this.Mid.height = '560px';


    this.TextoDois = false;
    this.TextoTres = false
    this.TextoQuatro = false;
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false


    this.After.height = '25px';
    this.Leave.height = '25px'
    this.Treatment.height = '25px'
    this.Mask.height = '25px'
    this.Cream.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }
  expandDivDois() {
    this.After.width = '55vh';
    this.TextoDois = true;
    this.After.height = '340px';


    this.TextoUm = false;
    this.TextoTres = false
    this.TextoQuatro = false;
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false

    this.Mid.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px'
    this.Mask.height = '25px'
    this.Cream.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }
  expandDivTres() {
    this.Treatment.width = '55vh';
    this.TextoTres = true;
    this.Treatment.height = '440px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoQuatro = false;
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false


    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Leave.height = '25px'
    this.Mask.height = '25px'
    this.Cream.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }
  expandDivQuatro() {
    this.Leave.width = '55vh';
    this.TextoQuatro = true;
    this.Leave.height = '590px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false


    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Mask.height = '25px'
    this.Cream.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }

  expandDivQuinto() {
    this.Mask.width = '55vh';
    this.TextoQuinto = true;
    this.Mask.height = '540px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuatro = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false


    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px';
    this.Cream.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }
  expandDivSexto() {
    this.Cream.width = '55vh';
    this.TextoSexto = true;
    this.Cream.height = '530px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuatro = false
    this.TextoQuinto = false
    this.TextoSetimo = false;
    this.TextoOito = false
    this.TextoNono = false

    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px';
    this.Mask.height = '25px';
    this.Jelly.height = '25px';
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }

  expandDivSetimo() {
    this.Jelly.width = '55vh';
    this.TextoSetimo = true;
    this.Jelly.height = '240px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuatro = false
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoOito = false
    this.TextoNono = false

    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px';
    this.Mask.height = '25px';
    this.Cream.height = '25px'
    this.Milk.height = '25px';
    this.Tonic.height = '25px';
  }

  expandDivOito() {
    this.Milk.width = '55vh';
    this.TextoOito = true;
    this.Milk.height = '580px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuatro = false
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoNono = false


    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px';
    this.Mask.height = '25px';
    this.Cream.height = '25px'
    this.Jelly.height = '25px'
    this.Tonic.height = '25px';

  }

  expandDivNono() {
    this.Tonic.width = '55vh';
    this.TextoNono = true;
    this.Tonic.height = '380px';

    this.TextoUm = false;
    this.TextoDois = false;
    this.TextoTres = false;
    this.TextoQuatro = false
    this.TextoQuinto = false
    this.TextoSexto = false;
    this.TextoSetimo = false;
    this.TextoOito = false


    this.Mid.height = '25px';
    this.After.height = '25px';
    this.Treatment.height = '25px'
    this.Leave.height = '25px';
    this.Mask.height = '25px';
    this.Cream.height = '25px'
    this.Jelly.height = '25px'
    this.Milk.height = '25px'

  }

}



