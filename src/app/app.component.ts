import { Component, OnInit } from '@angular/core';
import { nave } from './disposizione/nave.interface';
import { GeneratoreNaviService } from './generatore-navi.service';
import { GestorePartitaService } from './gestore-partita.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  barche: nave[] = [];
  title = 'battaglia-navale';
  arrayRighe: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  arrayColonne: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  bersaglio: string;
  vittoria: boolean = false;
  gameOver: boolean = false;
  indexOfarrayNavi: number = 0;

  constructor(
    private generaratoreNavi: GeneratoreNaviService,
    private gestorePartitaService: GestorePartitaService
  ) {}

  ngOnInit(): void {
    this.barche = this.generaratoreNavi.getNavi();
    this.gestorePartitaService.perso.subscribe(() => {
      this.gameOver = true;
    });
    this.gestorePartitaService.vinto.subscribe(() => {
      this.vittoria = true;
    });
    this.gestorePartitaService.resetGame.subscribe(() => {
      this.vittoria = false;
      this.gameOver = false;
    });
    this.gestorePartitaService.resetGame.subscribe(() => {
      this.barche = this.generaratoreNavi.getNavi();
    });
    console.log(this.bersaglio);
  }

  onTentativo(xy) {
    this.bersaglio = xy;
    for (let barca of this.barche) {
      this.indexOfarrayNavi++;
      for (let coordinata of barca.coordinate) {
        if (this.bersaglio === coordinata) {
          barca.colpiSubiti++;
          if (barca.colpiSubiti === barca.lunghezzaNave) {
            //console.log(barca.tipoNave + ' è stata abbattuta');
          }
          return;
        }
      }
    }
    this.gestorePartitaService.vitaPersa();
  }

  occupaCasella(x: string, y: string): boolean {
    for (let oggettoNave of this.barche) {
      if (oggettoNave.coordinate.includes(x + y)) {
        return true;
      }
    }
    return false;
  }
}
