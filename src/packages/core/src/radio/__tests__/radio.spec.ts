import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import { ERadio } from '../radio';

describe('ERadio', (): void => {
    let component: ERadio;
    let fixture: ComponentFixture<ERadio>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ERadio ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ERadio);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
