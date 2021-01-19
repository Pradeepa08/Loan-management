import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { LoanSearchComponent } from "src/app/loan/loan-search/loan-search.component";
describe('LoanSearchComponent', () => {
  let component: LoanSearchComponent;
  let fixture: ComponentFixture<LoanSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanSearchComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have search function', () => {
    expect(component.loanSearch).toBeTruthy();
  });
  it('should have edit function', () => {
    expect(component.edit).toBeTruthy();
  });

});