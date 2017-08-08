import { Palestrante } from './palestrante.class';
import { Injectable } from '@angular/core';

@Injectable()
export class PalestrantesService {

  palestrantes: Palestrante[] = [
    { nome: 'Carlos Santos', palestra: 'Contêineires', imagem: 'carlos-santos.png' },
    { nome: 'Carlos Vernizze', palestra: 'Serviços reativos', imagem: 'carlos-vernizze.jpg' },
    { nome: 'Lidia Freitas', palestra: 'PWA - Progressive Web Apps', imagem: 'lidia.jpg' },
    { nome: 'Jean', palestra: 'Mvvm Cross', imagem: 'jean.jpg' },
    { nome: 'Jonas', palestra: 'Como entregar mais com menos?', imagem: 'jonas.jpg' }
  ]

  getPalestrantes() {

    return this.palestrantes;

  }

  addPalestrante(palestrante:Palestrante){
    this.palestrantes.push(palestrante);    
  }

  removePalestrante(index){
    this.palestrantes = this.palestrantes.splice(index, 1);  

  }

  constructor() { }

}
