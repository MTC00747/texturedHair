import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/resultados.service';
import * as emailjs from 'emailjs-com';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result-dois',
  templateUrl: './result-dois.component.html',
  styleUrls: ['./result-dois.component.css']
})
export class ResultDoisComponent {
  image: string = ''

  Mid: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',
    border: '0.7px solid white'
  };
  After: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Treatment: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Leave: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Mask: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white',

  };
  Cream: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Jelly: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };

  Milk: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    transition: 'width 0.5s, height 0.5s',

    border: '0.7px solid white'
  };
  Tonic: any = {
    visivel: true,
    width: '38vw',
    height: '25px',
    backgroun29vhr: 'rgba(213, 199, 190, 0.3)',
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



  constructor(private route : Router , private resultService: ResultadosService) {


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

    const combing = this.resultService.Resultado.includes('combing')
    const control = this.resultService.Resultado.includes('control')
    const curls = this.resultService.Resultado.includes('curls')
    const moisturization = this.resultService.Resultado.includes('moisturization')
    const shine = this.resultService.Resultado.includes('shine')
    const smootness = this.resultService.Resultado.includes('Smoothness')



    switch (true) {
      // Curly + Oil
      case curly && Oil:
        if (growth || Thermal) {
          this.image = '/assets/images/Curly-oily-d-03.png';
          this.Mid.visivel = true;
          this.Cream.visivel = true;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Curly-oily-d-02.png';
          this.Mid.visivel = true;
          this.Cream.visivel = true;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (smootness || combing || control || curls || moisturization || shine) {
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
        break;

      // Curly + Balanced
      case curly && Balanced:
        if (growth || Thermal) {
          this.image = '/assets/images/Curly-balanced-d-03.png';
          this.Mid.visivel = true;
          this.Cream.visivel = true;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Curly-balanced-d-02.png';
          this.Mid.visivel = true;
          this.Cream.visivel = true;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (smootness || combing || control || curls || moisturization || shine) {
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
        break;

      // Coily + Oil
      case coily && Oil:
        if (growth || Thermal) {
          this.image = '/assets/images/Coily/Coily-oily-03.png';
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Coily/Coily-oily-d-02.png';
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (smootness || combing || control || curls || moisturization || shine) {
          this.image = '/assets/images/Coily/Coily-oily-d-01.png'
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
        break;

      // Coily + Balanced
      case coily && Balanced:
        if (growth || Thermal) {
          this.image = '/assets/images/Coily/Coily-balanced-d-03.png';
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;
        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Coily/Coily-balanced-d-02.png';
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;
        } else if (smootness || combing || control || curls || moisturization || shine) {
          this.image = '/assets/images/Coily/Coily-balanced-d-01.png'

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
        break;
      case Kinky && Oil:
        if (growth || Thermal) {
          this.image = '/assets/images/Kinky/Kink-oily-d-03.png'
          this.Mid.visivel = true;
          this.Cream.visivel = true;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Kinky/Kink-oily-d-02.png'
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = true;
          this.Leave.visivel = false;
          this.Milk.visivel = false;
        } else if (smootness || combing || control || curls || moisturization || shine) {
          this.image = '/assets/images/Kinky/Kink-oily-d-01.png'
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
        break;

      case Kinky && Balanced:
        if (growth || Thermal) {
          this.image = '/assets/images/Kinky/Kink-balanced-d-03.png'
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = true;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;

        } else if (Breakage || resistance || due || Nutrition) {
          this.image = '/assets/images/Kinky/Kink-balanced-d-02.png'
          this.Mid.visivel = true;
          this.Cream.visivel = false;
          this.After.visivel = true;
          this.Jelly.visivel = true;
          this.Tonic.visivel = false;
          this.Mask.visivel = true;
          this.Treatment.visivel = false;
          this.Leave.visivel = true;
          this.Milk.visivel = true;
        } else if (smootness || combing || control || curls || moisturization || shine) {
          this.image = '/assets/images/Kinky/Kink-balanced-d-01.png'
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
        // ... Continue with other cases similarly
        break;
      default :
      console.log("error!")

    }
  }


  expandDivUm() {
    this.Mid.width = '38vw';
    this.TextoUm = true;
    this.Mid.height = '47vh';


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
    this.After.width = '38vw';
    this.TextoDois = true;
    this.After.height = '29vh';


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
    this.Treatment.width = '38vw';
    this.TextoTres = true;
    this.Treatment.height = '35vh';

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
    this.Leave.width = '38vw';
    this.TextoQuatro = true;
    this.Leave.height = '46vh';

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
    this.Mask.width = '38vw';
    this.TextoQuinto = true;
    this.Mask.height = '40vh';

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
    this.Cream.width = '38vw';
    this.TextoSexto = true;
    this.Cream.height = '40vh';

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
    this.Jelly.width = '38vw';
    this.TextoSetimo = true;
    this.Jelly.height = '23vh';

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
    this.Milk.width = '38vw';
    this.TextoOito = true;
    this.Milk.height = '43vh';

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
    this.Tonic.width = '38vw';
    this.TextoNono = true;
    this.Tonic.height = '29vh';

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
