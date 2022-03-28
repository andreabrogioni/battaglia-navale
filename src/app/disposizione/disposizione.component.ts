import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GeneratoreNaviService } from '../generatore-navi.service';
import { GestorePartitaService } from '../gestore-partita.service';

import { nave } from './nave.interface';

@Component({
  selector: 'app-disposizione',
  templateUrl: './disposizione.component.html',
  styleUrls: ['./disposizione.component.css'],
})
export class DisposizioneComponent implements OnInit, OnChanges {
  @Input() xy: string;

  arrayNavi: nave[] = [];
  vittoria: boolean = false;
  abbattute: number = 0;

  constructor(
    private generatoreNaviService: GeneratoreNaviService,
    private gestorePartitaService: GestorePartitaService
  ) {}

  ngOnInit(): void {
    this.arrayNavi = this.generatoreNaviService.getNavi();
    console.log(this.abbattute);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let i = 0;
    this.gestorePartitaService.resetGame.subscribe(() => {
      this.arrayNavi = this.generatoreNaviService.getNavi();
      for (let nave of this.generatoreNaviService.arrayNavi) {
        nave.abbattuta = false;
        nave.colpiSubiti = 0;
        this.abbattute = 0;
      }
    });
    for (let barca of this.arrayNavi) {
      for (let posizione of barca.coordinate) {
        if (this.xy === posizione) {
          this.arrayNavi[i].colpiSubiti + 1;
          if (
            this.arrayNavi[i].colpiSubiti === this.arrayNavi[i].lunghezzaNave
          ) {
            this.arrayNavi[i].abbattuta = true;
            this.abbattute++;
            if (this.abbattute === this.arrayNavi.length) {
              this.gestorePartitaService.vittoria();
            }
          }
        }
      }
      i++;
    }
  }
}
