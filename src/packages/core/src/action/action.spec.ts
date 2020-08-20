import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAction } from './action';

describe('EAction', (): void => {
    let component: EAction;
    let fixture: ComponentFixture<EAction>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EAction ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EAction);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
