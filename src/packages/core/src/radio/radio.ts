import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Host,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';

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
export class ERadio implements ControlValueAccessor, OnInit, OnDestroy {

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
    @Input() public get checked(): boolean {
        return this._checked;
    }
    public set checked(checked: boolean) {
        this._checked = coerceBooleanProperty(checked);
        this.cdr.markForCheck();
    }
    /**
     * Radio disabled state.
     */
    @Input() public get disabled(): boolean {
        return this._disabled;
    }
    public set disabled(disabled: boolean) {
        this._disabled = coerceBooleanProperty(disabled);
        this.cdr.markForCheck();
    }
    /**
     * Radio readonly state.
     */
    @Input() public get readonly(): boolean {
        return this._readonly;
    }
    public set readonly(readonly: boolean) {
        this._readonly = coerceBooleanProperty(readonly);
        this.cdr.markForCheck();
    }
    @Input() public formControlName: string;
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();
    /**
     * @internal
     */
    public hasError: boolean = false;
    private control: AbstractControl;
    private subs: Subscription;
    private _checked: boolean = false;
    private _disabled: boolean = false;
    private _readonly: boolean = false;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer, private cdr: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        if (this.controlContainer && this.formControlName) {
            this.control = this.controlContainer.control.get(this.formControlName);
            this.subs = this.control.statusChanges.subscribe((status: string): void => {
                this.hasError = status === 'INVALID';
                this.cdr.markForCheck();
            });
        }
    }

    public ngOnDestroy(): void {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }

    /**
     * @internal
     */
    public onRadioChange(event: Event): void {
        const radio: HTMLInputElement = event.target as HTMLInputElement;
        this.checked = radio.checked;
        this.onChange.emit(radio);
        this.cdr.markForCheck();
    }

    /**
     * @internal
     */
    public writeValue(value: any): void {
        if (value !== this.checked) {
            this.checked = coerceBooleanProperty(value);
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
