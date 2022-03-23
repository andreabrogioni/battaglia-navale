import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './row/tile/tile.component';
import { DisposizioneComponent } from './disposizione/disposizione.component';

@NgModule({
  declarations: [AppComponent, TileComponent, DisposizioneComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
