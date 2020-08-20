/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ESelect } from './select';

describe('ESelect', (): void => {
    let component: ESelect;
    let fixture: ComponentFixture<ESelect>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESelect ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESelect);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
