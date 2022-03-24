import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  Valores:string = ''

  getValores():string{

    return this.Valores
  }

  setValores(formscheck: string) {
    this.Valores = formscheck
  }
}
