import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

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

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESelect ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESelect);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
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
