import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/resultados.service';
import * as emailjs from 'emailjs-com';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result1',
  templateUrl: './result1.component.html',
  styleUrls: ['./result1.component.css']
})
export class Result1Component {
  image: string = ''

  Mid: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',
    border: '0.7px solid white'
  };
  After: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Treatment: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Leave: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Mask: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white',

  };
  Cream: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Jelly: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };

  Milk: any = {
    visivel: true,
    width: '55vh',
    height: '25px',
    backgroundColor: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Tonic: any = {
    visivel: true,
    width: '55vh',
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



  constructor(private route : Router ,private resultService: ResultadosService) {


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
      }
    }
    
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


    //Curly-Balanced

    if (curly && Balanced) {
      if (growth || Thermal) {
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
      }
    }
    if (curly && Balanced  ) {

      if (Breakage || resistance || due || Nutrition) {
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
    //Coily-Oil

    if (coily && Oil) {
      if (growth || Thermal) {
        this.image = '/assets/images/Coily/Coily-oily-03.png'
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
        this.image ='/assets/images/Coily/Coily-oily-02.png'
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
      this.image = '/assets/images/Coily/Coily-oily-01.png'
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
        this.image = '/assets/images/Coily/Coily-balanced-03.png'
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
        this.image = '/assets/images/Coily/Coily-balanced-02.png'
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
      this.image = '/assets/images/Coily/Coily-balanced-01.png'

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
        this.image = '/assets/images/Kinky/Kink-oily-03.png'
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
        this.image = '/assets/images/Kinky/Kink-oily-02.png'
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
      this.image = '/assets/images/Kinky/Kink-oily-01.png'
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
        this.image = '/assets/images/Kinky/Kink-balanced-03.png'
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
        this.image = '/assets/images/Kinky/Kink-balanced-02.png'
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
      this.image = '/assets/images/Kinky/Kink-balanced-01.png'
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

  submitForm(){
		const 	emailParams: any = {
			firstName: this.resultService.form.firstName,
      lastName : this.resultService.form.LastName,
			email:this.resultService.form.email,
      academic : this.resultService.form.academicTitle,
			company:this.resultService.form.company,
      phone : this.resultService.form.phone,
      result : this.resultService.Resultado
		}
		emailjs.send('service_q7kxuvq', 'template_oimyi3q', emailParams, 'j0dWighWN1fKIwCub')
		
		.then(response => {
		  console.log('E-mail enviado com sucesso!', response);
		  console.log(emailParams)
		})
		.catch(error => {
		  console.error('Erro ao enviar o e-mail:', error);
		});
    this.route.navigate(['thank'])
}

}