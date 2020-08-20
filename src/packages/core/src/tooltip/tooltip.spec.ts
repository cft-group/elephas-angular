/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ETooltip } from './tooltip';

describe('ETooltip', (): void => {
    let component: ETooltip;
    let fixture: ComponentFixture<ETooltip>;

    beforeEach(async((): void => {
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
