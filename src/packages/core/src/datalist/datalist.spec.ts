/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EDataList } from './datalist';

describe('EDataList', (): void => {
    let component: EDataList;
    let fixture: ComponentFixture<EDataList>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDataList ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDataList);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
