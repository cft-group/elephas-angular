import {Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from '@angular/forms';

const noop: any = (): void => {};
let nextUniqueId: number = 0;

export const CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((): any => ECheckbox),
    multi: true
};

@Component({
    selector: 'e-checkbox',
    templateUrl: './checkbox.html',
    providers: [CHECKBOX_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class ECheckbox implements ControlValueAccessor, OnChanges {

    /**
     * Checkbox checked state.
     */
    @Input() public checked: boolean = false;
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Checkbox disabled state.
     */
    @Input() public disabled: boolean = false;
    /**
     * Checkbox id.
     */
    @Input() public inputId: string = `el-checkbox-${++nextUniqueId}`;
    /**
     * Checkbox name.
     */
    @Input() public name: string = '';
    /**
     * Checkbox readonly state.
     */
    @Input() public readonly: boolean = false;
    /**
     * Checkbox value.
     */
    @Input() public value: string = '';
    @Input() public control: FormControl = new FormControl();
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    public ngOnChanges(changes: SimpleChanges): void {
        if ('disabled' || 'readonly' in changes) {
            if (this.disabled || this.readonly) {
                this.control.disable();
            } else {
                this.control.enable();
            }
        }
    }

    /**
     * @internal
     */
    public onCheckedChanged(event: Event): void {
        const checkbox: HTMLInputElement = event.target as HTMLInputElement;
        this.checked = checkbox.checked;
        this.control.setValue(this.checked);
        this.onChange.emit(checkbox);
    }

    /**
     * @internal
     */
    public writeValue(value: any): void {
        if (value !== this.checked) {
            this.checked = value;
        }
    }

    /**
     * @internal
     */
    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    /**
     * @internal
     */
    public registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

}
