import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanComponent} from "./loan/loan.component";

const routes: Routes = [
  {
    path:'',
    component:LoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
