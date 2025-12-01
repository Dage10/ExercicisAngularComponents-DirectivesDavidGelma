import { Component } from '@angular/core';

@Component({
  selector: 'app-correu',
  imports: [],
  templateUrl: './correu.html',
  styleUrl: './correu.css',
})
export class Correu {
  correu: any

  constructor() {
    this.correu = {
      titol: "Pràctica Correu Angular8 Proba",
      cos: "Hola aixo es un correu",
      emisor: "david.gelma@institutvidreres.cat",
      destinatari: "david.gelma@institutvidreres.cat"
    }
  }
}
