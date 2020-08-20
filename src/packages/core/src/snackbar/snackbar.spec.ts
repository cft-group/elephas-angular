/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ESnackbar } from './snackbar';

describe('ESnackbar', (): void => {
    let component: ESnackbar;
    let fixture: ComponentFixture<ESnackbar>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESnackbar ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESnackbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
