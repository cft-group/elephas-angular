import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {EChip} from '../chip';

describe('EChip', (): void => {
    let component: EChip;
    let fixture: ComponentFixture<EChip>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EChip ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EChip);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
