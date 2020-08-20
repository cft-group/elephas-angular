/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EInput } from './input';

describe('EInput', (): void => {
    let component: EInput;
    let fixture: ComponentFixture<EInput>;

    beforeEach(async((): void => {
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
