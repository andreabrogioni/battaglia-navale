import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class GestorePartitaService {
  constructor() {}
  vite: number = 10;

  resetGame = new EventEmitter();
  resettaVite = new EventEmitter();
  //Eventi emessi rispettivamente per la vittoria e la sconfitta
  vinto = new EventEmitter();
  perso = new EventEmitter();
  //resettaNavi = new EventEmitter();
  show = new EventEmitter();

  vitaPersa() {
    this.vite = this.vite - 1;
    this.resettaVite.emit();
    if (this.vite === 0) {
      this.gameover();
    }
  }

  gameover() {
    this.perso.emit();
  }

  vittoria() {
    this.vinto.emit();
  }

  reset() {
    this.vite = 10;
    this.resettaVite.emit();
    this.resetGame.emit();
    //this.resettaNavi.emit();
  }
}
