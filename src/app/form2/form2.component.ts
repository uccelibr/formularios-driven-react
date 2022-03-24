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
  senha: string = ''
  senhaconf: string = ''
  
  //pattern//

  cpfpattern =  '^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$';
  senha1pattern = '^[0-9]{5}$';
  senha2pattern = '^[0-9]{5}$';
  telefonepattern = '^[0-9]{2}[0-9]{5}-[0-9]{4}$';

///////////////


    personalData: FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required,Validators.minLength(5)]),
    lastname: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    cpf: new FormControl ('', [Validators.required]),
    endereco: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    complemento: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    senha: new FormControl ('', [Validators.required]),
    senhaconf: new FormControl ('', [Validators.required]),
    telefone: new FormControl ('', [ Validators.required]),

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
  Senha:${this.senha}
  
  `)

    const dialogRef = this.dialog.open(DialoformsComponent, {
      width: '250px',height:'300'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }


  comparar(senha:string, senhaconf:string): boolean{
    return! (senha === senhaconf)
  }
 }