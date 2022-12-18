import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUserDetails } from 'src/utils/octokit-handler';
import { addHistoryItem } from 'src/utils/history-handler';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {

  public isLoading: boolean = true;
  public username: string;
  public isUserNotFound: boolean = false;
  public userDetails: any = {}

  constructor(private actRoute: ActivatedRoute) {
    this.username = this.actRoute.snapshot.params['username'];
    console.log("Username", this.username)
    this.handleGetUser()

  }

  async handleGetUser() {
    getUserDetails(this.username)
      .then(response => {
        this.userDetails = response.data;
        addHistoryItem({
          query: this.username,
          type: "SUCCESS"
        });
      })
      .catch(err => {
        this.isUserNotFound = true
        addHistoryItem({
          query: this.username,
          type: "FAILURE"
        })
      })
      .finally(() => this.isLoading = false)
  }

  ngOnInit(): void {
  }

}
