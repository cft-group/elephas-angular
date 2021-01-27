import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {EInput} from '../input';

@Component({
    template: `
        <e-base-input>
            <input eInput>
        </e-base-input>
    `
})
class TestInput { }

describe('EInput', (): void => {
    let component: TestInput;
    let fixture: ComponentFixture<TestInput>;
    let input: HTMLInputElement;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [
                EInput,
                TestInput
            ]
        })
            .createComponent(TestInput);

        fixture = TestBed.createComponent(TestInput);
        component = fixture.componentInstance;
        input = fixture.debugElement.query(By.css('input')).nativeElement;
        fixture.detectChanges();
    }));

    it('should create an instance', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as readonly "true"', (): void => {
        input.readOnly = true;
        fixture.detectChanges();
        expect(input.getAttribute('readonly')).toEqual('');
    });

    it('should have as disabled "true"', (): void => {
        input.disabled = true;
        expect(input.getAttribute('disabled')).toEqual('');
    });

    it('should have as class "_e_input__control"', (): void => {
        expect(input.classList).toContain('_e_input__control');
    });
});
