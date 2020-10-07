import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETab } from '../tab';

describe('ETab', (): void => {
    let component: ETab;
    let fixture: ComponentFixture<ETab>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETab ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
