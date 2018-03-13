import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { ResourceGlobalConfig } from '@ngx-resource/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { OsxtitlebarComponent } from './components/osxtitlebar/osxtitlebar.component';

import { CardComponent } from './components/card/card.component';
import { CardService, CardResource } from './services/card.service';

import { ArticleService, ArticleResource } from './services/article.service';
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

ResourceGlobalConfig.url = environment.apiUrl;

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
    ResourceModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CardService,
    CardResource,
    ArticleService,
    ArticleResource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
