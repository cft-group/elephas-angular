import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EHeaderAction} from '../header-action';

describe('EHeaderAction', (): void => {
    let component: EHeaderAction;
    let fixture: ComponentFixture<EHeaderAction>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EHeaderAction ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EHeaderAction);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
