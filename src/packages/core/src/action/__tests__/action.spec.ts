import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {EAction} from '../action';

@Component({
    template: `
        <button eAction>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.41431 3H19.5859C20.1382 3 20.5859 3.44772 20.5859 4C20.5859 4.26522 20.4805 4.51957 20.293 4.70711L14.0001 11V21L10.0001 18V11L3.7072 4.70711C3.31668 4.31658 3.31668 3.68342 3.7072 3.29289C3.89474 3.10536 4.14909 3 4.41431 3Z" />
            </svg>
            Filter Items Button
        </button>
    `
})
class TestAction { }

describe('EAction', (): void => {
    let component: TestAction;
    let fixture: ComponentFixture<TestAction>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EAction, TestAction ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(TestAction);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have class "_e_action"', (): void => {
        const action: DebugElement = fixture.debugElement.query(By.css('._e_action'));
        expect(action).toBeTruthy();
    });

    it('should have class "_e_action__icon"', (): void => {
        const icon: DebugElement = fixture.debugElement.query(By.css('._e_action__icon'));
        expect(icon).toBeTruthy();
    });
});
