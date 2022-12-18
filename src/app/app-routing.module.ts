import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { GithubSearchComponent } from './pages/github-search/github-search.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';
import { ShellComponent } from './layouts/shell/shell.component';
const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-profile/:username', component: UsersProfileComponent },
      { path: 'github-search', component: GithubSearchComponent },
      { path: 'search-history', component: SearchHistoryComponent },
    ]
  },
  { path: "**", component: PagesError404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
