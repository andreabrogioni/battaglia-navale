import { Component, Input, OnInit } from '@angular/core';
import { nave } from './nave.interface';

@Component({
  selector: 'app-disposizione',
  templateUrl: './disposizione.component.html',
  styleUrls: ['./disposizione.component.css'],
})
export class DisposizioneComponent implements OnInit {
  ngOnInit(): void {}
  @Input() xy: string;

  arrayNavi: nave[] = [
    {
      tipoNave: 'portaerei',
      lunghezzaNave: 4,
      colpiSubiti: 0,
    },

    {
      tipoNave: 'incrociatore1',
      lunghezzaNave: 4,
      colpiSubiti: 0,
    },

    {
      tipoNave: 'incrociatore2',
      lunghezzaNave: 4,
      colpiSubiti: 0,
    },

    { tipoNave: 'torpediniere1', lunghezzaNave: 4, colpiSubiti: 0 },
    { tipoNave: 'torpediniere2', lunghezzaNave: 4, colpiSubiti: 0 },
    { tipoNave: 'torpediniere3', lunghezzaNave: 4, colpiSubiti: 0 },

    { tipoNave: 'sommergibile1', lunghezzaNave: 4, colpiSubiti: 0 },
    { tipoNave: 'sommergibile2', lunghezzaNave: 4, colpiSubiti: 0 },
    { tipoNave: 'sommergibile3', lunghezzaNave: 4, colpiSubiti: 0 },
    { tipoNave: 'sommergibile4', lunghezzaNave: 4, colpiSubiti: 0 },
  ];
  colpito: boolean = false;

  constructor() {}
}
