import { Component, OnInit } from '@angular/core';
import { GeneratoreNaviService } from './generatore-navi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //barche: string[] = [];
  title = 'battaglia-navale';
  arrayRighe: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  arrayColonne: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  bersaglio: string;

  //constructor(private generaratoreNavi: GeneratoreNaviService) {}

  /*ngOnInit(): void {
    this.barche = this.generaratoreNavi.barche;
    this.arrayRighe = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    this.arrayColonne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  }*/

  onCoordinate(xy) {
    this.bersaglio = xy;
    console.log(this.bersaglio);
  }
}
