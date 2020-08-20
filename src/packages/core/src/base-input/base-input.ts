import {EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {InputWidth} from './input-width.enum';

export class EBaseInput {

    @Input() public control: FormControl = new FormControl();
    /**
     * Field value.
     */
    @Input() public value: string;
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Hint message. Hidden when appearance is set to error.
     */
    @Input() public hint: string;
    /**
     * Field label.
     */
    @Input() public label: string;
    /**
     * Field width.
     */
    @Input() public width: InputWidth;
    /**
     * Visual appearance.
     */
    @Input() public appearance: 'error' | 'default' | 'disabled' | 'readonly' = 'default';
    /**
     * Error message. Must be set when appearance is set to error.
     */
    @Input() public error: string;
    /**
     * Blur handler.
     */
    @Output() public onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    /**
     * Focus handler.
     */
    @Output() public onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();
    /**
     * @internal
     */
    public hasError: boolean;
    /**
     * @internal
     */
    public inputWidth: typeof InputWidth = InputWidth;
    /**
     * @internal
     */
    public subs: Subscription = new Subscription();

    /**
     * @internal
     */
    public focus(event: FocusEvent): void {
        this.onFocus.emit(event);
    }

    /**
     * @internal
     */
    public blur(event: FocusEvent): void {
        this.onBlur.emit(event);
    }

    /**
     * @internal
     */
    public input(event: Event): void {
        const target: HTMLInputElement = <HTMLInputElement>event.target;
        this.onChange.emit(target);
    }

    /**
     * @internal
     */
    public setControlValue(): void {
        if (this.value) {
            this.control.setValue(this.value);
        }
    }

    /**
     * @internal
     */
    public setControlDisable(): void {
        if (this.appearance === 'disabled' || this.appearance === 'readonly') {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }

    /**
     * @internal
     */
    public errorControlSubscribe(): void {
        this.subs.add(this.control.statusChanges.subscribe((status: string): void => {
            this.hasError = status === 'INVALID';
        }));
    }

}
