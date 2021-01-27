import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EDropdownTriggers} from '../dropdown-triggers';
import {EDropdown} from '../dropdown';
import {EDropdownItem} from '../dropdown-item';

@Component({
    template: `
        <e-base-input>
            <input [eDropdownTriggers]="dropdown">
            <e-dropdown #dropdown>
                <e-dropdown-item value="One"></e-dropdown-item>
                <e-dropdown-item value="Two"></e-dropdown-item>
                <e-dropdown-item value="Three"></e-dropdown-item>
            </e-dropdown>
        </e-base-input>
    `
})
class TestDropdownTriggers { }

describe('EDropdownTriggers', (): void => {

    let component: TestDropdownTriggers;
    let fixture: ComponentFixture<TestDropdownTriggers>;
    let input: DebugElement;
    let dropdown: HTMLDivElement;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [
                TestDropdownTriggers,
                EDropdown,
                EDropdownItem,
                EDropdownTriggers
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestDropdownTriggers);
        component = fixture.componentInstance;
        fixture.detectChanges();
        input = fixture.debugElement.query(By.directive(EDropdownTriggers));
        dropdown = fixture.debugElement.query(By.css('._e_dropdown__card')).nativeElement;
    }));

    it('should have dropdown element', (): void => {
        expect(input).toBeTruthy();
    });

    it('should dropdown item click once', waitForAsync((): void => {
        input.triggerEventHandler('focusin', null);
        fixture.detectChanges();

        const items: Element[] = Array.from(dropdown.querySelectorAll('._e_dropdown__item'));
        items[1].dispatchEvent(new MouseEvent('click'));
        fixture.whenStable().then((): void => {
            fixture.detectChanges();
            expect(input.nativeElement.value).toEqual('Two');
        });
    }));
});
