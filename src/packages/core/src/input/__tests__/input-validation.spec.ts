import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EInput} from '../input';

@Component({
    template: `
        <e-base-input>
            <input type="email" [formControl]="control" eInput>
        </e-base-input>
    `
})
class TestInputValidation {
    public control: FormControl = new FormControl('', [ Validators.email ]);
}

describe('EInputValidation', (): void => {
    let component: TestInputValidation;
    let fixture: ComponentFixture<TestInputValidation>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [
                EInput,
                TestInputValidation
            ]
        })
            .createComponent(TestInputValidation);

        fixture = TestBed.createComponent(TestInputValidation);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should test control validity', (): void => {
        component.control.setValue('John Peter');
        expect(component.control.invalid).toBeTruthy();

        component.control.setValue('mail@mail.com');
        expect(component.control.valid).toBeTruthy();
    });
});
