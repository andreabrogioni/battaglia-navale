import { Injectable } from '@angular/core';
import { cell } from './cella.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneratoreNaviService {
  /*numeroPortaerei: number = 1;
  numeroIncrociatori: number = 2;
  numeroTorpedinieri: number = 3;
  numeroSottomarini: number = 4;

  lunghezzaPortaerei: number = 4;
  lunghezzaIncrociatori: number = 3;
  lunghezzaTorpedinieri: number = 2;
  lunghezaSottomarini: number = 1;*/

  arrayLunghezze: number[] = [4, 3, 3, 2, 2, 2, 1, 1, 1];

  arrayRighe: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  arrayColonne: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  indiceRiga: number = 0;
  indiceColonna: number = 0;
  coordinataIniziale: string = '';
  arrayDirezioni: number[] = [0, 90]; //per ora sto usando solo due direzioni oriz e vert
  direzioneRandom: number = 0;
  arrayCaselleOccupate: string[] = [];
  public barche: string[] = ['a1', 'c1'];
  trovata: string; //se trova una coordinata è string ma senno è undefinded, che

  constructor() {}

  posizionaNave(lunghezaNave) {
    //gli faccio restituire un array di coordinate che sono necessarie per disporre la nave
    this.indiceRiga = Math.floor(Math.random() * this.arrayRighe.length);
    this.indiceColonna = Math.floor(Math.random() * this.arrayColonne.length);
    this.coordinataIniziale =
      this.arrayColonne[this.indiceColonna] + this.arrayRighe[this.indiceRiga];
    this.trovata = this.arrayCaselleOccupate.find(
      (element) => element === this.coordinataIniziale
    );
    if (this.trovata === undefined) {
      //se non ha trovato nessuna corrispondenza nelle caselle gia occupate

      this.direzioneRandom =
        this.arrayDirezioni[
          Math.floor(Math.random() * this.arrayDirezioni.length)
        ];
      if (this.direzioneRandom === 0) {
        //la barca è verticale
        if (this.indiceRiga + lunghezaNave - 1 < 10) {
          this.arrayCaselleOccupate.push(this.coordinataIniziale);
          for (
            let i = this.indiceRiga + 1;
            i < this.indiceRiga + lunghezaNave;
            i++
          ) {}
        } else {
          //devo bloccarlo perche uscirebbe dalla matrice
        }
      } else {
        //la barca è orizzontale
        if (this.indiceColonna + lunghezaNave - 1 < 10) {
        } else {
          //devo bloccarlo perche uscirebbe dalla matrice
        }
      }
    } else {
      //la casella è occupata
    }
  }

  private direzioneNave(): number {
    return this.arrayDirezioni[
      Math.floor(Math.random() * this.arrayDirezioni.length)
    ];
  }

  private numeroRiga(): string {
    return this.arrayRighe[Math.floor(Math.random() * this.arrayRighe.length)];
  }

  private letteraColonna(): string {
    return this.arrayColonne[
      Math.floor(Math.random() * this.arrayColonne.length)
    ];
  }
}
