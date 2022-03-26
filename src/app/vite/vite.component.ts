import { Component, OnInit } from '@angular/core';
import { GestorePartitaService } from '../gestore-partita.service';

@Component({
  selector: 'app-vite',
  templateUrl: './vite.component.html',
  styleUrls: ['./vite.component.css'],
})
export class ViteComponent implements OnInit {
  vite: number = 10;
  vittoria: boolean = false;
  constructor(private gestorePartitaService: GestorePartitaService) {}

  ngOnInit(): void {
    this.vite = this.gestorePartitaService.vite;
    this.gestorePartitaService.resettaVite.subscribe(() => {
      this.vite = this.gestorePartitaService.vite;
    });
    this.gestorePartitaService.vinto.subscribe(() => {
      this.vittoria = true;
    });
  }

  onRestart() {
    this.gestorePartitaService.reset();
    this.vittoria = false;
  }
}
