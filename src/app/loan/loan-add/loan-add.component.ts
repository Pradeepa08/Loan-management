import { Component, OnInit } from '@angular/core';
import { ParamMap } from "@angular/router/router";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-loan-add',
  templateUrl: './loan-add.component.html',
  styleUrls: ['./loan-add.component.css']
})
export class LoanAddComponent implements OnInit {
  firstname: string;
  lastname: string;
  loannumber: number;
  propertyaddress: string;
  loanamount: number;
  loantype: string;
  loanterm: string;
  originationdate: string;
  originationaccount: string;
  addForm: FormGroup;
  isAdded: boolean = false;

  constructor() { }

  ngOnInit(): void {


    this.addForm = new FormGroup(
      {
        'firstname': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'lastname': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'loannumber': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        'propertyaddress': new FormControl('', [Validators.required]),
        'loanamount': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        'loantype': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'loanterm': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z,0-9, ]*$')]),
        'loanstatus': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'Originationdate': new FormControl('', [Validators.required, Validators.pattern('^[0-9,/]*$')]),
        'Originationaccount': new FormControl('', [Validators.required, Validators.pattern('^[0-9,-]*$')]),
      }
    );
  }
  add() {
    console.log(this.addForm.value);
  }
}
