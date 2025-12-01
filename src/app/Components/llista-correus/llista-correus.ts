import { Component } from '@angular/core';
import {NgClass, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './llista-correus.html',
  styleUrl: './llista-correus.css',
})
export class LlistaCorreus {
  correus: any[]

  numero_llegits = 0
  numero_no_llegits = 0

  constructor() {
    const correu = {
      titol: "Pràctica Correu Angular8 Proba",
      cos: "Hola aixo es un correu",
      emisor: "david.gelma@institutvidreres.cat",
      destinatari: "david.gelma@institutvidreres.cat",
      llegit: true,
    }
    const correu2 = {
      titol: "Pràctica Correu Angular8 Proba2",
      cos: "Hola aixo es un correu",
      emisor: "david.gelma@institutvidreres.cat",
      destinatari: "david.gelma@institutvidreres.cat",
      llegit: false
    }
    this.correus = [];
    this.correus.push(correu);
    this.correus.push(correu2);

    for(let correu of this.correus){
      if(correu.llegit){
        this.numero_llegits++
      }
      else{
        this.numero_no_llegits++
      }
    }
  }
}
