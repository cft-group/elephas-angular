import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EHeaderRight} from '../header-right';

describe('EHeaderRight', (): void => {
    let component: EHeaderRight;
    let fixture: ComponentFixture<EHeaderRight>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EHeaderRight ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EHeaderRight);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
