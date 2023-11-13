import {Component, OnInit} from '@angular/core';
import {Observable} from 'windowed-observable';
import {getLoansState, updateLoansList} from "../../store";
import {getUserState} from "mfe_login/store";


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  observable = new Observable('messages');
  loans?: any[] = [];
  user?: any;


  constructor() {
  }

  ngOnInit(): void {
    this.loans = getLoansState();
    this.observable.publish({loans:this.loans});
    this.user = getUserState();

  }

  pay(index: number) {
    this.loans?.splice(index, 1);
    this.observable.publish({loans:this.loans});
    updateLoansList(this.loans || []);

  }

}
