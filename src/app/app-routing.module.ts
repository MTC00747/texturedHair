import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PagFormComponent } from './pages/pag-form/pag-form.component';
import { EscolhaDeCabeloComponent } from './pages/escolha-de-cabelo/escolha-de-cabelo.component';
import { Type } from '@angular/compiler';
import { TypeHairComponent } from './type-hair/type-hair.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { Result1Component } from './pages/results/result1/result1.component';
import { ResultDoisComponent } from './pages/results/result-dois/result-dois.component';
import { PageDoisComponent } from './pages/page-dois/page-dois.component';
import { ThankComponent } from './pages/thank/thank.component';

const routes: Routes = [
  {path:'', component: PaginaInicialComponent},
  {path:'Form', component: PagFormComponent},
  {path:'Escolha-de-Cabelo', component: EscolhaDeCabeloComponent}, 
  {path: 'type-hair', component:TypeHairComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path:'result', component: Result1Component},
  {path:'result-dois', component: ResultDoisComponent},
  {path:'page-dois', component: PageDoisComponent},
  {path:'thank', component: ThankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
