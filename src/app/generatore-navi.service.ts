import { Injectable } from '@angular/core';
import { nave } from './disposizione/nave.interface';
import { GestorePartitaService } from './gestore-partita.service';

@Injectable({
  providedIn: 'root',
})
export class GeneratoreNaviService {
  arrayNavi: nave[] = [
    {
      tipoNave: 'portaerei',
      lunghezzaNave: 4,
      colpiSubiti: 0,
      coordinate: ['a1', 'b1', 'c1', 'd1'],
      abbattuta: false,
    },

    {
      tipoNave: 'incrociatore1',
      lunghezzaNave: 3,
      colpiSubiti: 0,
      coordinate: ['g1', 'g2', 'g3'],
      abbattuta: false,
    },

    {
      tipoNave: 'incrociatore2',
      lunghezzaNave: 3,
      colpiSubiti: 0,
      coordinate: ['i1', 'i2', 'i3'],
      abbattuta: false,
    },

    {
      tipoNave: 'torpediniere1',
      lunghezzaNave: 2,
      colpiSubiti: 0,
      coordinate: ['b3', 'c3'],
      abbattuta: false,
    },
    {
      tipoNave: 'torpediniere2',
      lunghezzaNave: 2,
      colpiSubiti: 0,
      coordinate: ['i7', 'i8'],
      abbattuta: false,
    },
    {
      tipoNave: 'torpediniere3',
      lunghezzaNave: 2,
      colpiSubiti: 0,
      coordinate: ['i9', 'i10'],
      abbattuta: false,
    },

    {
      tipoNave: 'sommergibile1',
      lunghezzaNave: 1,
      colpiSubiti: 0,
      coordinate: ['e9'],
      abbattuta: false,
    },
    {
      tipoNave: 'sommergibile2',
      lunghezzaNave: 1,
      colpiSubiti: 0,
      coordinate: ['a6'],
      abbattuta: false,
    },
    {
      tipoNave: 'sommergibile3',
      lunghezzaNave: 1,
      colpiSubiti: 0,
      coordinate: ['d6'],
      abbattuta: false,
    },
    {
      tipoNave: 'sommergibile4',
      lunghezzaNave: 1,
      colpiSubiti: 0,
      coordinate: ['f5'],
      abbattuta: false,
    },
  ];

  arrayRighe: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  arrayColonne: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  indiceRiga: number = 0;
  indiceColonna: number = 0;
  coordinataIniziale: string = '';
  arrayDirezioni: number[] = [0, 90]; //per ora sto usando solo due direzioni oriz e vert
  direzioneRandom: number = 0;
  arrayCaselleOccupate: string[] = [];
  trovata: string; //se trova una coordinata è string ma senno è undefinded, che

  constructor(private gestorePartitaService: GestorePartitaService) {}

  getNavi(): nave[] {
    let cloneArray: nave[] = this.arrayNavi.slice();
    return cloneArray;
  }

  //algoritmo coordinate random

  creaGriglia() {
    for (let nave of this.arrayNavi) {
      this.creaNave(nave.lunghezzaNave);
    }
  }

  creaNave(lunghezza) {
    this.coordinataIniziale =
      this.arrayColonne[this.letteraColonna()] +
      this.arrayRighe[this.numeroRiga()];
    this.trovata = this.arrayCaselleOccupate.find(
      (element) => element === this.coordinataIniziale
    );
    this.direzioneRandom = this.direzioneNave();
  }

  private numeroRiga(): string {
    return this.arrayRighe[Math.floor(Math.random() * this.arrayRighe.length)];
  }

  private letteraColonna(): string {
    return this.arrayColonne[
      Math.floor(Math.random() * this.arrayColonne.length)
    ];
  }

  private direzioneNave(): number {
    return this.arrayDirezioni[
      Math.floor(Math.random() * this.arrayDirezioni.length)
    ];
  }

  private controllaSpaziLiberi() {}

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
}
