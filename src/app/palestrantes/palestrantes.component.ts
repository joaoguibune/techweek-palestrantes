import { Palestrante } from './palestrante.class';
import { PalestrantesService } from './palestrantes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent implements OnInit {

  palestrantes: Palestrante[] = [];
  palestrante: Palestrante = {nome:'', palestra:'', imagem:''};
  palestrantesService : PalestrantesService;
  
  addPalestra(obj:Palestrante){    
   this.palestrantesService.addPalestrante(obj);
  }

  removePalestra(index:number){
    debugger;
     this.palestrantesService.removePalestrante(index);
  }

  constructor() {
    this.palestrantesService = new PalestrantesService();
   }


  ngOnInit() {
    this.palestrantes = this.palestrantesService.getPalestrantes();
  }

}
