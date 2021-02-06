import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EDatepickerGrid} from '../datepicker-grid';

describe('DatepickerGridComponent', (): void => {
    let component: EDatepickerGrid;
    let fixture: ComponentFixture<EDatepickerGrid>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDatepickerGrid ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDatepickerGrid);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
