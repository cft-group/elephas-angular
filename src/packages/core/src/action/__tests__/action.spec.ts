import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { EAction } from '../action';

describe('EAction', (): void => {
    let component: EAction;
    let fixture: ComponentFixture<EAction>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EAction ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EAction);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should click', (): void => {
        spyOn(component.onClick, 'emit');
        const action: HTMLElement = fixture.debugElement.query(By.css('._e_action')).nativeElement;
        action.dispatchEvent(new MouseEvent('click'));

        fixture.detectChanges();
        expect(component.onClick.emit).toHaveBeenCalled();
    });
});
