import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESpinner } from '../spinner';

describe('ESpinner', (): void => {
    let component: ESpinner;
    let fixture: ComponentFixture<ESpinner>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESpinner ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESpinner);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
