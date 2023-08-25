import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PagFormComponent } from './pages/pag-form/pag-form.component';
import { EscolhaDeCabeloComponent } from './pages/escolha-de-cabelo/escolha-de-cabelo.component';
import { TypeHairComponent } from './type-hair/type-hair.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { Result1Component } from './pages/results/result1/result1.component';
import { ResultadosService } from './resultados.service';
import { ResultDoisComponent } from './pages/results/result-dois/result-dois.component';
import { ResultTresComponent } from './pages/results/result-tres/result-tres.component';
import { PageDoisComponent } from './pages/page-dois/page-dois.component';
import { ThankComponent } from './pages/thank/thank.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PagFormComponent,
    EscolhaDeCabeloComponent,
    TypeHairComponent,
    BenefitsComponent,
    Result1Component,
    ResultDoisComponent,
    ResultTresComponent,
    PageDoisComponent,
    ThankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
