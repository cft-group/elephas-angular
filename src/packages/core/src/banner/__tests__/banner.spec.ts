import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EBanner } from '../banner';

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
