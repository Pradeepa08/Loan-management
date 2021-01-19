import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.css']
})
export class LoanSearchComponent implements OnInit {
  loandetails: any;
  firstname: string;
  lastname: string;
  loannumber: number;
  isShown: boolean = false;
  shown: boolean = false;
  userdetail: any;
  role: String;
  loanDetail: any;
  constructor(private route: ActivatedRoute, private router: Router, private dataservice: LoanService, private routers: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.routers.paramMap.subscribe((params: ParamMap) => { this.role = params.get('role') });
    console.log(this.role);
  }
  loanSearch() {
    this.dataservice.search().subscribe((data) => {
    this.loandetails = data;
      if (this.loandetails.FirstName == this.firstname || this.loandetails.LastName == this.lastname || this.loandetails.LoanNumber == this.loannumber) {
        this.loanDetail = this.loandetails;
        this.isShown = !this.isShown;
      }
    });
  }
  edit(loanNumber) {
    this.router.navigate(['/loan-edit', loanNumber])
  }
}



