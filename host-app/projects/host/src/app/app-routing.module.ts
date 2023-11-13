import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('mfe_login/loginModule').then((module) => module.LoginModule),
  },
  {
    path: 'loan',
    pathMatch: 'full',
    loadChildren: () =>
      import('mfe_loan/loanModule').then((module) => module.LoanModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
