import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from './login.model';
import { LoanService } from "src/app/loan.service";

// import{DataService} from '../service/service.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  userdetail: any
  email: string;
  password: string;
  role: string;
  errorMessage: any;
  login = new LoginModel();

  constructor(private route: ActivatedRoute, private router: Router, private dataservice: LoanService) { }

  logInUser() {
    this.dataservice.login().subscribe((data) => {
    this.userdetail = data;
      if (this.userdetail.user.email == this.email && this.userdetail.user.password == this.password && this.userdetail.user.role == "user") {
        this.router.navigate(['/loan', this.userdetail.user.role]);
      }
      if (this.userdetail.admin.email == this.email && this.userdetail.admin.password == this.password && this.userdetail.admin.role == "admin") {
        this.router.navigate(['/loan', this.userdetail.admin.role]);
      }
    });
  }
  ngOnInit(): void {
  }
}