import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Octokit } from "octokit";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { getAllUsers } from 'src/utils/octokit-handler';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  @ViewChild('usersTable') usersTable!: ElementRef;

  constructor(public router: Router, public hostElement: ElementRef) {
    this.octokit = new Octokit({ auth: environment.github_token });
    this.handleGetUsers()
  }

  public octokit: any;
  public userData: any = [];
  public per_page: number = 25;

  navigateToUserProfile(username: string) {
    this.router.navigate(['/user-profile', username]);
  }

  initializeDatatable() {

    // @ts-ignore
    new simpleDatatables.DataTable(this.usersTable.nativeElement);

    /**
     * TODO: Find a way to intialise datatable with routerLink
     * * viewChildren, QueryList and Renderer2 can be used to improve the current event listener handling 
     * ! Need to remove eventListeners on component destroy to avoid memory leaks
     */

    document.querySelectorAll(".tr-placeholder").forEach(ele => {
      ele.addEventListener("click", () => this.navigateToUserProfile(ele.id))
    })

  }

  async handleGetUsers() {
    const userResponse = await getAllUsers(this.per_page)
    this.userData = userResponse?.data
    setTimeout(() => this.initializeDatatable(), 0);
  }

  onClickSearchSubmit(formValue: any) {
    this.navigateToUserProfile(formValue.query)
  }

  ngOnInit(): void { }
}
