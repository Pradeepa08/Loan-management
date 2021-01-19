import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LoanService } from "src/app/loan.service";
import { loandetail } from "src/app/models/loandetail";

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit {
  editForm: FormGroup;
  loannumber: string;
  loandetail: loandetail;

  constructor(private router: ActivatedRoute, private service: LoanService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => { this.loannumber = params.get('loannumber') });
    this.service.searchByLoannumber(this.loannumber).subscribe((data) => {
      this.loandetail = data; console.log(this.loandetail); this.editForm = new FormGroup(
        {
          'firstname': new FormControl(this.loandetail.FirstName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
          'lastname': new FormControl(this.loandetail.LastName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
          'loannumber': new FormControl(this.loandetail.LoanNumber, [Validators.required, Validators.pattern('^[0-9]*$')]),
          'propertyaddress': new FormControl(this.loandetail.PropertyAddress, [Validators.required]),
          'loanamount': new FormControl(this.loandetail.LoanAmount, [Validators.required, Validators.pattern('^[0-9]*$')]),
          'loantype': new FormControl(this.loandetail.LoanType, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
          'loanterm': new FormControl(this.loandetail.LoanTerm, [Validators.required, Validators.pattern('^[a-zA-Z,0-9, ]*$')]),
          'loanstatus': new FormControl(this.loandetail.LoanStatus, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
          'Originationdate': new FormControl(this.loandetail.OriginationDate, [Validators.required, Validators.pattern('^[0-9,/]*$')]),
          'Originationaccount': new FormControl(this.loandetail.OriginationAccount, [Validators.required, Validators.pattern('^[0-9,-]*$')]),
        }
      );
    });
    console.log(this.loandetail);
  }

  edit() {
    console.log(this.editForm.value);
  }
}
