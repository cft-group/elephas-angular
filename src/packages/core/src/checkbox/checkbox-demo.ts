import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'e-checkbox-demo',
    template: `
        <form [formGroup]="form">
            <e-checkbox [control]="control">Checkbox</e-checkbox>
        </form>
    `
})
export class ECheckboxDemo implements OnInit {

    public control: FormControl = new FormControl('', [ Validators.required ]);
    public form: FormGroup = new FormGroup({
        checkbox: this.control
    });

    public ngOnInit(): void {
        this.control.setErrors({ required: true });
    }


}
