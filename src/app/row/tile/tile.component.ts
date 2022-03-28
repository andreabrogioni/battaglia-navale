import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cell, typeEnum } from 'src/app/cella.interface';
import { GestorePartitaService } from 'src/app/gestore-partita.service';

@Component({
  selector: 'tile-component',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() x;
  @Input() y;
  /*@Input() set value(cella: cell) {
    this.dati = cella;
  }*/
  @Input() occupata: boolean = false; //false cosi da generarla libera

  @Output() coordinate = new EventEmitter<string>();

  xy: string = '';

  dati: cell = {
    type: typeEnum.sea,
    disabled: false,
    x: '',
    y: '',
    ship: false,
  };

  constructor(private gestorePartitaService: GestorePartitaService) {}

  ngOnInit(): void {
    this.dati.x = this.x;
    this.dati.y = this.y;
    this.xy = this.x + this.y;
    if (this.occupata === true) {
      this.dati.ship = true;
    }
    this.gestorePartitaService.vinto.subscribe(() => {
      this.dati.disabled = true;
    });

    this.gestorePartitaService.resetGame.subscribe(() => {
      this.dati.disabled = false;
    });
    this.gestorePartitaService.perso.subscribe(() => {
      this.dati.disabled = true;
    });
  }

  onFire() {
    this.dati.disabled = true;
    this.coordinate.emit(this.xy);
  }
}
