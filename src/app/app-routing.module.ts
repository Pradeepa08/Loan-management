import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoanComponent } from './loan/loan.component';
import { LoanSearchComponent } from './loan/loan-search/loan-search.component';
import { LoanDetailComponent } from './loan/loan-search/loan-detail/loan-detail.component';
import { LoanAddComponent } from './loan/loan-add/loan-add.component';
import { LoanEditComponent } from './loan/loan-search/loan-edit/loan-edit.component';
import { AuthguardService } from "src/app/service/authguard.service";

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot([
       { path: '', component: LoginComponent },
      { path: 'loan/:role', component: LoanComponent, canActivate:[AuthguardService]},
      { path: 'login', component: LoginComponent  },
      { path: 'loan-search/:role', component: LoanSearchComponent , canActivate:[AuthguardService] },
      { path: 'loan-add', component: LoanAddComponent, canActivate:[AuthguardService] },
      { path: 'loan-detail', component: LoanDetailComponent, canActivate:[AuthguardService]  },
      { path: 'loan-edit/:loanNumber', component: LoanEditComponent, canActivate:[AuthguardService]  }
    //  canActivate:[AuthgaurdserviceService]
      // { path: '**', component: LoginComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
