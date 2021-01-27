import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {ESelect} from '../select';

@Component({
    template: `
        <e-base-input>
            <select eSelect>
                <option *ngFor="let option of options" [value]="option.value">{{ option.title }}</option>
            </select>
        </e-base-input>
    `
})
class TestSelect {
    public options: any[] = [
        { value: 1, title: 'One' },
        { value: 2, title: 'Two' },
        { value: 3, title: 'Three' }
    ];
}

describe('ESelect', (): void => {
    let component: TestSelect;
    let fixture: ComponentFixture<TestSelect>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [ CommonModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [ ESelect, TestSelect ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestSelect);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as select class "_e_input__control"', (): void => {
        const select: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
        expect(select.classList).toContain('_e_input__control');
    });

    it('should visible option if options is have data', (): void => {
        const opts: DebugElement[] = fixture.debugElement.queryAll(By.css('option'));
        expect(opts[1].nativeElement.textContent).toBeTruthy('Two');
    });
});
