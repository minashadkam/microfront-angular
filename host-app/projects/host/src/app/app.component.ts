import {Component, OnInit} from '@angular/core';
import {DataSharingService} from "./services/data-sharing.service";
import {Router} from "@angular/router";
import {Observable} from 'windowed-observable';
import {User} from "./models/user";
import {getLoansState} from "mfe_loan/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  observable = new Observable('messages');
  openedMenu: boolean = false;
  user?: User;
  loanCount: number = 0;

  constructor(private _router: Router,
              private _dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.user = undefined;
    window.addEventListener('ON_USE_LOGIN', (event: any) => {
      console.log(`current user is : ${event}`);
      this.user = this._dataSharingService.user = event?.detail;
      this._router.navigate(['/'])
    });
    // const {getLoansState} = require('mfe_loan/store');

    // get the shared state
    this.loanCount = getLoansState()?.length;

    this.observable.subscribe((res: any) => {
      this.loanCount = res.loans?.length;
    })


  }

}
