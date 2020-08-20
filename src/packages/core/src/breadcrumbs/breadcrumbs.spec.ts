/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EBreadcrumbs } from './breadcrumbs';

describe('EBreadcrumbs', (): void => {
    let component: EBreadcrumbs;
    let fixture: ComponentFixture<EBreadcrumbs>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBreadcrumbs ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBreadcrumbs);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
