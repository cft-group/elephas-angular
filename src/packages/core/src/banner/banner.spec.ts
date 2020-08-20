/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EBanner } from './banner';

describe('EBanner', (): void => {
    let component: EBanner;
    let fixture: ComponentFixture<EBanner>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBanner ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBanner);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
