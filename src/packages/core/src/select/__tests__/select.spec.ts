import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {ESelect} from '../select';
import {Option} from '../models';

describe('ESelect', (): void => {
    let component: ESelect;
    let fixture: ComponentFixture<ESelect>;
    const options: Option[] = [
        {
            value: '',
            title: ''
        }, {
            value: '1',
            title: 'One'
        }, {
            value: '2',
            title: 'Two'
        }, {
            value: '3',
            title: 'Three'
        }
    ];

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [ CommonModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [ ESelect ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESelect);
        component = fixture.componentInstance;
    });

    it('should create', (): void => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should hide option if options is empty', (): void => {
        expect(fixture.debugElement.queryAll(By.css('option'))).toEqual([]);
    });

    it('should visible option if options is have data', (): void => {
        component.options = options;
        fixture.detectChanges();

        const opts: DebugElement[] = fixture.debugElement.queryAll(By.css('option'));
        expect(opts[1].nativeElement.textContent).toBeTruthy('One');
    });
});
