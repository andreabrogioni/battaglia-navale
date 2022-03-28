import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './row/tile/tile.component';
import { DisposizioneComponent } from './disposizione/disposizione.component';
import { ViteComponent } from './vite/vite.component';
import { TastieraComponent } from './tastiera/tastiera.component';

@NgModule({
  declarations: [AppComponent, TileComponent, DisposizioneComponent, ViteComponent, TastieraComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
