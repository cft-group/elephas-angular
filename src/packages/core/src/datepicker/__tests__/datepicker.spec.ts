import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EDatepicker} from '../datepicker';

describe('EDatepicker', (): void => {
    let component: EDatepicker;
    let fixture: ComponentFixture<EDatepicker>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDatepicker ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDatepicker);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
