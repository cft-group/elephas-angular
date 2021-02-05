import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {EToggleButton} from '../toggle-button';

@Component({
    template: `
        <e-toggle-button [items]="['Left', 'Middle', 'Right']"></e-toggle-button>
    `
})
class TestToggleButton { }

describe('EToggleButton', (): void => {
    let component: TestToggleButton;
    let fixture: ComponentFixture<TestToggleButton>;
    let toggleButtons: HTMLElement;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [
                TestToggleButton,
                EToggleButton
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(TestToggleButton);
        component = fixture.componentInstance;
        fixture.detectChanges();
        toggleButtons = fixture.debugElement.query(By.css('._e_toggle-button')).nativeElement;
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should be able to pick up toggles', (): void => {
        const items: Element[] = Array.from(toggleButtons.querySelectorAll('._e_toggle-button__item'));
        items[1].dispatchEvent(new MouseEvent('click'));
        fixture.whenStable().then((): void => {
            fixture.detectChanges();
            expect(items[1].classList).toContain('_e_toggle-button__item_selected');
        });
    });
});
