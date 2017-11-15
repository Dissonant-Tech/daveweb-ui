import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RestModule } from 'rest-ngx';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { OsxtitlebarComponent } from './components/osxtitlebar/osxtitlebar.component';

import { CardComponent } from './components/card/card.component';
import { CardService, CardRest } from './services/card.service';

import { ArticleComponent } from './pages/article/article.component';
import { CardpageComponent } from './pages/cardpage/cardpage.component';

import { environment } from './../environments/environment';


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
    TerminalComponent,
    OsxtitlebarComponent,
    CardComponent,
    ArticleComponent,
    CardpageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: environment.routeTrace }
    ),
    RestModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CardService,
    CardRest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
