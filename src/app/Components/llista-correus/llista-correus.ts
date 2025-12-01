import { Component } from '@angular/core';
import {NgClass, NgFor} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [NgFor, NgClass],
  templateUrl: './llista-correus.html',
  styleUrl: './llista-correus.css',
})
export class LlistaCorreus {
  correus: any[]

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
  }
}
