/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ERadio } from './radio';

describe('ERadio', (): void => {
    let component: ERadio;
    let fixture: ComponentFixture<ERadio>;

    beforeEach(async((): void => {
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
