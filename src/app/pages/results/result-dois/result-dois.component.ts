import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/resultados.service';

@Component({
  selector: 'app-result-dois',
  templateUrl: './result-dois.component.html',
  styleUrls: ['./result-dois.component.css']
})
export class ResultDoisComponent {
  image: string = ''

  Mid: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',
    border: '0.7px solid white'
  };
  After: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Treatment: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Leave: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Mask: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white',

  };
  Cream: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Jelly: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };

  Milk: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Tonic: any = {
    visivel: true,
    width: '75vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
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



  constructor(private resultService: ResultadosService) {


    const curly = this.resultService.Resultado.includes('Curly')
    const coily = this.resultService.Resultado.includes('Coily')
    const Kinky = this.resultService.Resultado.includes('Kinky')

    const Oil = this.resultService.Resultado.includes('Oil')
    const Balanced = this.resultService.Resultado.includes('Balanced')


    const Breakage = this.resultService.Resultado.includes('Breakage')
    const resistance = this.resultService.Resultado.includes('resistance')
    const due = this.resultService.Resultado.includes('due')
    const Nutrition = this.resultService.Resultado.includes('Nutrition')

    const growth = this.resultService.Resultado.includes('growth')
    const Thermal = this.resultService.Resultado.includes('Thermal')
    
    if (curly && Oil) {
      if (Breakage || resistance || due || Nutrition) {
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

    if (curly && Oil) {
      if (growth || Thermal) {
        this.image = '/assets/images/Curly-oily-d-03.png'
        this.Mid.visivel = true;
        this.Cream.visivel = true;
        this.After.visivel = true;
        this.Jelly.visivel = true;
        this.Tonic.visivel = true;
        this.Mask.visivel = true;
        this.Treatment.visivel = true;
        this.Leave.visivel = false;
        this.Milk.visivel = false;
      }
    }
    
    }

    const resultOne = ['Curly', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValores = resultOne.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValores) {
      this.image = '/assets/images/Curly-oily-d-01.png'
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


    //Curly-Balanced

    if (curly && Balanced) {
      if (growth || Thermal) {
        this.image = '/assets/images/Curly-balanced-d-03.png'
        this.Mid.visivel = true;
        this.Cream.visivel = true;
        this.After.visivel = true;
        this.Jelly.visivel = true;
        this.Tonic.visivel = true;
        this.Mask.visivel = true;
        this.Treatment.visivel = true;
        this.Leave.visivel = false;
        this.Milk.visivel = false;
      }
    }
    if (curly && Balanced  ) {

      if (Breakage || resistance || due || Nutrition) {
        this.image = '/assets/images/Curly-balanced-d-02.png'
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
    const resultFour = ['Curly', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValoresFour = resultFour.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresFour) {
      this.image = '/assets/images/Curly-balanced-d-01.png'
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
    //Coily-Oil

    if (coily && Oil) {
      if (growth || Thermal) {
        this.image = '/assets/images/Coily/Coily-oily-d-03.png'
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
    }

    if (coily && Oil) {
      if (Breakage || resistance || due || Nutrition) {
        this.image ='/assets/images/Coily/Coily-oily-d-02.png'
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
    }

    const resultSeven = ['Coily', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'Smoothness']
    const todosOsValoresSeven = resultSeven.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresSeven) {
      this.image = '/assets/images/Coily/coily-oily-d-01.png'
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



    //Coily-Balanced

    if (coily && Balanced) {
      if (growth || Thermal) {
        this.image = '/assets/images/Coily/Coily-balanced-d-03.png'
        this.Mid.visivel = true;
        this.Cream.visivel = false;
        this.After.visivel = true;
        this.Jelly.visivel = true;
        this.Tonic.visivel = true;
        this.Mask.visivel = true;
        this.Treatment.visivel = false;
        this.Leave.visivel = true;
        this.Milk.visivel = true;
      }
    }

    if (coily && Balanced) {
      if (Breakage || resistance || due || Nutrition) {
        this.image = '/assets/images/Coily/Coily-balanced-d-02.png'
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
    }


    const resultTeen = ['Coily', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'shine']
    const todosOsValoresTeen = resultTeen.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresTeen) {
      this.image = '/assets/images/Coily/coily-balanced-d-01.png'

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


    //Kinky-oil

    if (Kinky && Oil) {
      if (growth || Thermal) {
        this.image = '/assets/images/Kinky/kink-oily-d-03.png'
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

    if (Kinky && Oil) {
      if (Breakage || resistance || due || Nutrition) {
        this.image = '/assets/images/Kinky/kink-oily-d-02.png'
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
    }

    const resultTreze = ['Kinky', 'Oil', 'combing', 'control', 'curls', 'moisturization', 'shine']
    const todosOsValoresTreze = resultTreze.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresTreze) {
      this.image = '/assets/images/Kinky/kink-oily-d-01.png'
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


    //Kinky-Balanced

    if (Kinky && Balanced) {
      if (growth || Thermal) {
        this.image = '/assets/images/Kinky/kink-balanced-d-03.png'
        this.Mid.visivel = true;
        this.Cream.visivel = false;
        this.After.visivel = true;
        this.Jelly.visivel = true;
        this.Tonic.visivel = true;
        this.Mask.visivel = true;
        this.Treatment.visivel = false;
        this.Leave.visivel = true;
        this.Milk.visivel = true;
      }
    }

    if (Kinky && Balanced) {
      if (Breakage || resistance || due || Nutrition) {
        this.image = '/assets/images/Kinky/kink-balanced-d-02.png'
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
    }

    const resultDezesseis = ['Kinky', 'Balanced', 'combing', 'control', 'curls', 'moisturization', 'shine']
    const todosOsValoresDezesseis = resultDezesseis.every(valor => this.resultService.Resultado.includes(valor))
    if (todosOsValoresDezesseis) {
      this.image = '/assets/images/Kinky/kink-balanced-d-01.png'
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
    this.Mid.width = '75vh';
    this.TextoUm = true;
    this.Mid.height = '360px';


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
    this.After.width = '75vh';
    this.TextoDois = true;
    this.After.height = '240px';


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
    this.Treatment.width = '75vh';
    this.TextoTres = true;
    this.Treatment.height = '340px';

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
    this.Leave.width = '75vh';
    this.TextoQuatro = true;
    this.Leave.height = '360px';

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
    this.Mask.width = '75vh';
    this.TextoQuinto = true;
    this.Mask.height = '350px';

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
    this.Cream.width = '75vh';
    this.TextoSexto = true;
    this.Cream.height = '340px';

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
    this.Jelly.width = '75vh';
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
    this.Milk.width = '75vh';
    this.TextoOito = true;
    this.Milk.height = '360px';

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
    this.Tonic.width = '75vh';
    this.TextoNono = true;
    this.Tonic.height = '280px';

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
