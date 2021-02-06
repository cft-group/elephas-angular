import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EHeaderLeft} from '../header-left';

describe('EHeaderLeft', (): void => {
    let component: EHeaderLeft;
    let fixture: ComponentFixture<EHeaderLeft>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EHeaderLeft ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EHeaderLeft);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
