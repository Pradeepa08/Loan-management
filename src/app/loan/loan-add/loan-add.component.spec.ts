
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanAddComponent } from 'src/app/loan/loan-add/loan-add.component';

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
