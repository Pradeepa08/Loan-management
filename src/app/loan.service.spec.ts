import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoanService } from "src/app/loan.service";

describe('LoanService', () => {
    let service: LoanService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(LoanService)
        httpMock = TestBed.inject(HttpTestingController)
    });
    afterEach(() => {
        httpMock.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should have search function', (done) => {
        service.search().subscribe((user) => {
            expect(user).toBeDefined();
            done();
        }
        )
        const testRequest = httpMock.expectOne('./assets/loandetail.json');
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush([{}]);
    });

    it('should have logim function', (done) => {
        service.login().subscribe((user) => {
            expect(user).toBeDefined();
            done();
        }
        )
        const testRequest = httpMock.expectOne('./assets/userdetail.json');
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush([{ email: 'srini@gmail.com', password: 'password@123', role: 'admin' }, { email: 'pradee@gmail.com', password: 'password@12', role: 'user' }]);
    });
});