import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {DataSharingService} from "../../services/data-sharing.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null;
  loansCount: number = 0

  constructor(private _dataSharingService:DataSharingService) {
    this.user = this._dataSharingService.user;

  }

  ngOnInit(): void {

    const {getLoansState}  = require('mfe_loan/store');

    // get the shared state
    this.loansCount = getLoansState()?.length;
  }

}
