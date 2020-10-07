import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {EBanner} from '../banner';

describe('EBanner', (): void => {
    let component: EBanner;
    let fixture: ComponentFixture<EBanner>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [ CommonModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [ EBanner ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBanner);
        component = fixture.componentInstance;
    });

    it('should create', (): void => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should have as className "undefined"', (): void => {
        expect(component.className).toEqual(undefined);
    });

    it('should have as appearance "undefined"', (): void => {
        expect(component.appearance).toEqual(undefined);
    });

    it('should hide close button if emit observers is empty', (): void => {
        expect(fixture.debugElement.query(By.css('._e_banner__close'))).toBeFalsy();
    });

    it('should click', (): void => {
        spyOn(component.onClick, 'emit');
        component.onClick.subscribe();
        fixture.detectChanges();

        const close: HTMLElement = fixture.debugElement.query(By.css('._e_banner__close')).nativeElement;
        close.dispatchEvent(new MouseEvent('click'));

        expect(component.onClick.emit).toHaveBeenCalled();
    });
});
