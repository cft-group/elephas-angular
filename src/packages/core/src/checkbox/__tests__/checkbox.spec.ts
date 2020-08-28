import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ECheckbox} from '../checkbox';

describe('ECheckbox', (): void => {
    let component: ECheckbox;
    let fixture: ComponentFixture<ECheckbox>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ECheckbox ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ECheckbox);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
