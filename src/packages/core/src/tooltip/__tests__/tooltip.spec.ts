import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETooltip } from '../tooltip';

describe('ETooltip', (): void => {
    let component: ETooltip;
    let fixture: ComponentFixture<ETooltip>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETooltip ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETooltip);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
