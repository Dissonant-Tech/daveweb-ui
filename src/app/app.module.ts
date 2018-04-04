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
import { CardPageComponent } from './pages/card-page/card-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { environment } from './../environments/environment';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';


export const appRoutes: Routes = [
  { path: 'article/:id',
    component: ArticleComponent,
    pathMatch: 'full',
    data: {
      state: 'article'
    }
  },
  { path: 'home',
    component: CardPageComponent,
    pathMatch: 'full',
    data: {
      animate: 'left'
    }
  },
  { path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full',
    data: {
      animate: 'right'
    }
  },
  { path: '**', redirectTo: 'home' }
];

ResourceGlobalConfig.url = environment.apiUrl;

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    OsxtitlebarComponent,
    CardComponent,
    ArticleComponent,
    CardPageComponent,
    AboutPageComponent,
    NavTabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: environment.routeTrace }
    ),
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
