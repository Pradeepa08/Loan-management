// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoanAddComponent } from './loan-add.component';

// describe('LoanAddComponent', () => {
//   let component: LoanAddComponent;
//   let fixture: ComponentFixture<LoanAddComponent>;

//   beforeEach( () => {
//      TestBed.configureTestingModule({
//       declarations: [ LoanAddComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoanAddComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


// });
import { ComponentFixture, TestBed } from '@angular/core/testing';


// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { RouterTestingModule } from "@angular/router/testing";

// import { LoanSearchComponent } from "src/app/loan/loan-search/loan-search.component";
// import { LoanEditComponent } from "src/app/loan/loan-search/loan-edit/loan-edit.component";
import { LoanAddComponent } from "src/app/loan/loan-add/loan-add.component";
describe('LoanAddComponent', () => {
  let component: LoanAddComponent;
  let fixture: ComponentFixture<LoanAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanAddComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have add function', () => {
    expect(component.add).toBeTruthy();
  });

});
