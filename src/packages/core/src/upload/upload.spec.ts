/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EUpload } from './upload';

describe('EUpload', (): void => {
    let component: EUpload;
    let fixture: ComponentFixture<EUpload>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EUpload ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EUpload);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
