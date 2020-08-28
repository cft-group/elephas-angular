import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop: any = (): void => {};
let nextUniqueId: number = 0;

export const RADIO_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((): any => ERadio),
    multi: true
};

@Component({
    selector: 'e-radio',
    templateUrl: './radio.html',
    providers: [RADIO_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ERadio implements ControlValueAccessor, OnChanges {

    /**
     * Radio id.
     */
    @Input() public inputId: string = `el-radio-${++nextUniqueId}`;
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Radio value.
     */
    @Input() public value: string = '';
    /**
     * Radio name.
     */
    @Input() public name: string;
    /**
     * Radio checked state.
     */
    @Input() public checked: boolean = false;
    /**
     * Radio disabled state.
     */
    @Input() public disabled: boolean = false;
    /**
     * Radio readonly state.
     */
    @Input() public readonly: boolean = false;
    @Input() public formControl: FormControl = new FormControl();
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    public ngOnChanges(changes: SimpleChanges): void {
        if ('disabled' in changes) {
            if (this.disabled) {
                this.formControl.disable();
            } else {
                this.formControl.enable();
            }
        }
    }

    /**
     * @internal
     */
    public onRadioChange(event: Event): void {
        const radio: HTMLInputElement = event.target as HTMLInputElement;
        this.checked = radio.checked;
        this.formControl.setValue(this.checked);
        this.onChange.emit(radio);
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
