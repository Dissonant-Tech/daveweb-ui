import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TerminalComponent } from './terminal/terminal.component';
import { OsxtitlebarComponent } from './osxtitlebar/osxtitlebar.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { ArticleComponent } from './pages/article/article.component';
import { CardpageComponent } from './pages/cardpage/cardpage.component';


const appRoutes: Routes = [
  { path: 'article/:id',      component: ArticleComponent },
  { path: '',
    component: CardpageComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TerminalComponent,
    OsxtitlebarComponent,
    CardComponent,
    ArticleComponent,
    CardpageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
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
