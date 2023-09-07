import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  Resultado: string [] = []
   form = {
    firstName : '',
    LastName : '',
    academicTitle: '',
    email : '',
    company: '',
    phone : '',
    country : ''
   }
  constructor() { }

}
