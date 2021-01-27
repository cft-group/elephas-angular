import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EBaseInput } from '../base-input';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('EBaseInput', (): void => {
    let component: EBaseInput;
    let fixture: ComponentFixture<EBaseInput>;
    const width: number = 4;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBaseInput ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EBaseInput);
        component = fixture.componentInstance;
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as classname "_e_class-name"', (): void => {
        component.className = '_e_class-name';
        fixture.detectChanges();
        fixture.whenStable().then((): void => {
            const div: DebugElement = fixture.debugElement.query(By.css('._e_class-name'));
            expect(div).toBeTruthy();
        });
    });

    it('should set class "_e_input_size_4" when width is 4', (): void => {
        component.width = width;
        fixture.detectChanges();
        fixture.whenStable().then((): void => {
            const div: DebugElement = fixture.debugElement.query(By.css('._e_input_size_4'));
            expect(div).toBeTruthy();
        });
    });

    it('should set label', (): void => {
        component.label = 'Label';
        fixture.detectChanges();
        fixture.whenStable().then((): void => {
            const label: HTMLSpanElement = fixture.debugElement.query(By.css('._e_input__label')).nativeElement;
            expect(label.textContent).toEqual('Label');
        });
    });

    it('should set hint', (): void => {
        component.hint = 'Hint';
        fixture.detectChanges();
        fixture.whenStable().then((): void => {
            const label: HTMLSpanElement = fixture.debugElement.query(By.css('._e_input__hint')).nativeElement;
            expect(label.textContent).toEqual('Hint');
        });
    });

    it('should set error', (): void => {
        component.error = 'Error';
        component.hasError = true;
        fixture.detectChanges();
        fixture.whenStable().then((): void => {
            const label: HTMLSpanElement = fixture.debugElement.query(By.css('._e_input__hint')).nativeElement;
            expect(label.textContent).toEqual('Error');
        });
    });
});
