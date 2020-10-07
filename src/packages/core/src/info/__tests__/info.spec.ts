import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {EInfo} from '../info';

describe('EInfo', (): void => {
    let component: EInfo;
    let fixture: ComponentFixture<EInfo>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EInfo ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EInfo);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
