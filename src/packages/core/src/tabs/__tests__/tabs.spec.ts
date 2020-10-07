import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ETabs} from '../tabs';
import {ETab} from '../tab';

describe('ETabs', (): void => {
    let component: ETabs;
    let fixture: ComponentFixture<ETabs>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETabs, ETab ]
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETabs);
        component = fixture.componentInstance;
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as className "undefined"', (): void => {
        expect(component.className).toEqual(undefined);
    });
});
