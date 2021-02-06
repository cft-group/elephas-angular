import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EDatepickerHeader } from '../datepicker-header';

describe('EDatepickerHeader', (): void => {
    let component: EDatepickerHeader;
    let fixture: ComponentFixture<EDatepickerHeader>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDatepickerHeader ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDatepickerHeader);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
