import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {EInput} from '../input';

describe('EInput', (): void => {
    let component: EInput;
    let fixture: ComponentFixture<EInput>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EInput ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EInput);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
