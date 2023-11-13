import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoanComponent} from "./loan.component";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [LoanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: LoanComponent}]),
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
})
export class LoanModule {}
