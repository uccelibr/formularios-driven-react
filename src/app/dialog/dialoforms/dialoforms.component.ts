import { Component, OnInit } from '@angular/core';
import { DialogserviceService } from 'src/app/service/dialogservice.service';

@Component({
  selector: 'app-dialoforms',
  templateUrl: './dialoforms.component.html',
  styleUrls: ['./dialoforms.component.css']
})
export class DialoformsComponent implements OnInit {


  formscheck: string = this.dialogservice.getValores()

  constructor(
     private dialogservice: DialogserviceService
  ) {}

  ngOnInit(): void {
    this.formscheck = this.dialogservice.getValores()
  }

  
  }



