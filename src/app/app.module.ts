import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { GithubSearchComponent } from './pages/github-search/github-search.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';
import { FormsModule } from '@angular/forms';
import { DomChangedDirective } from 'src/utils/dom-oberserver.directive';
import { ShellComponent } from './layouts/shell/shell.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesError404Component,
    GithubSearchComponent,
    SearchHistoryComponent,
    DomChangedDirective,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
