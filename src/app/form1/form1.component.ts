
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialoformsComponent } from '../dialog/dialoforms/dialoforms.component';
import { DialogserviceService } from '../service/dialogservice.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']

})

export class Form1Component  {

  name: string = ''
  lastname: string = ''
  email: string = ''
  username: string =''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento:string =''
  senha1: string = ''
  senha2: string = ''

  
  constructor( 
    private dialog: MatDialog,
    private formscheck: DialogserviceService,
  ) {}

  
 startDialog(): void {

  this.formscheck.setValores(`
  Nome: ${this.name},
  Sobrenome:${this.lastname},
  Cpf:${this.cpf}
  Telefone:${this.telefone}
  Endereco:${this.endereco}
  Complemento:${this.complemento}
  Username:${this.username}
  Email:${this.email}
  Senha:${this.senha1}
  
  `)

const dialogRef = this.dialog.open(DialoformsComponent, {
  width: '350px', height: '400px',
});
dialogRef.afterClosed().subscribe(result => {
  console.log('formulario enviado');

});

}
}