import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanComponent } from './loan/loan.component';
import { LoanSearchComponent } from './loan/loan-search/loan-search.component';
import { LoanDetailComponent } from './loan/loan-search/loan-detail/loan-detail.component';
import { LoanAddComponent } from './loan/loan-add/loan-add.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanEditComponent } from './loan/loan-search/loan-edit/loan-edit.component';
import { LoanService } from 'src/app/loan.service';
import { HeaderComponent } from './header/header.component';
// import { AuthgaurdserviceService } from "src/app/authgaurdservice.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoanComponent,
    LoanSearchComponent,
    LoanDetailComponent,
    LoanAddComponent,
    LoanEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ErrorHandler, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
