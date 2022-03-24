import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { DialoformsComponent } from '../dialog/dialoforms/dialoforms.component';
import { DialogserviceService } from '../service/dialogservice.service'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
   
  name: string = ''
  lastname: string = ''
  email: string = ''
  username: string =''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento:string =''
  senha1: any = ''
  senha2: any = ''
  

    personalData: FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required,Validators.minLength(5)]),
    lastname: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    cpf: new FormControl ('', [Validators.required]),
    endereco: new FormControl ('', [Validators.required]),
    complemento: new FormControl ('', [Validators.required]),
    user: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required]),
    senha1: new FormControl ('', [Validators.required]),
    senha2: new FormControl ('', [Validators.required]),
    tels: new FormControl ('', [ Validators.required]),

  })

  
  constructor( 
    public dialog: MatDialog,
    private formscheck: DialogserviceService
  ) {}

 showDialog(): void {

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
      width: '250px',height:'300'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }





 }