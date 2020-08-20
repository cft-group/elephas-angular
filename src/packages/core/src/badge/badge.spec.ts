/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EBadge } from './badge';

describe('ElBadge', (): void => {
    let component: EBadge;
    let fixture: ComponentFixture<EBadge>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBadge ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBadge);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
