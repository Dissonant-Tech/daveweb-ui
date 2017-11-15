import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TerminalComponent } from './terminal/terminal.component';
import { OsxtitlebarComponent } from './osxtitlebar/osxtitlebar.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TerminalComponent,
    OsxtitlebarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
