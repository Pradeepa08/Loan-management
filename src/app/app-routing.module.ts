import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoanComponent } from './loan/loan.component';
import { LoanSearchComponent } from './loan/loan-search/loan-search.component';
import { LoanDetailComponent } from './loan/loan-search/loan-detail/loan-detail.component';
import { LoanAddComponent } from './loan/loan-add/loan-add.component';
import { LoanEditComponent } from './loan/loan-search/loan-edit/loan-edit.component'
const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'loan/:role', component: LoanComponent },
      { path: 'login', component: LoginComponent },
      { path: 'loan-search/:role', component: LoanSearchComponent },
      { path: 'loan-add', component: LoanAddComponent },
      { path: 'loan-detail', component: LoanDetailComponent },
      { path: 'loan-edit/:loannumber', component: LoanEditComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: LoginComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
