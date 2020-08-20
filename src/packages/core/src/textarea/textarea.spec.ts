/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ETextarea } from './textarea';

describe('ETextarea', (): void => {
    let component: ETextarea;
    let fixture: ComponentFixture<ETextarea>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETextarea ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETextarea);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
