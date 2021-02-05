import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnDestroy,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { InputWidth } from './input-width.enum';
import { EBaseControl } from './base-control';
import { EDropdown } from '../dropdown/dropdown';

@Component({
    selector: 'e-base-input',
    templateUrl: './base-input.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EBaseInput implements AfterContentInit, OnDestroy {

    /**
     * Additional CSS class.
     */
    @Input() public get className(): string {
        return this._className;
    }
    public set className(className: string) {
        this._className = className;
    }
    /**
     * Hint message. Hidden when appearance is set to error.
     */
    @Input() public get hint(): string {
        return this._hint;
    }
    public set hint(hint: string) {
        this._hint = hint;
    }
    /**
     * Field label.
     */
    @Input() public get label(): string {
        return this._label;
    }
    public set label(label: string) {
        this._label = label;
    }
    /**
     * Field width.
     */
    @Input() public get width(): InputWidth {
        return this._width;
    }
    public set width(width: InputWidth) {
        this._width = width;
    }
    /**
     * Error message. Must be set when appearance is set to error.
     */
    @Input() public get error(): string {
        return this._error;
    }
    public set error(error: string) {
        this._error = error;
    }

    /**
     * @internal
     */
    public hasError: boolean;
    /**
     * @internal
     */
    public disabled: boolean;
    /**
     * @internal
     */
    public readonly: boolean;
    /**
     * @internal
     */
    public inputWidth: typeof InputWidth = InputWidth;
    /**
     * @internal
     */
    public isSelect: boolean = false;
    /**
     * @internal
     */
    public isDropdown: boolean = false;
    /**
     * @internal
     */
    public focused: Observable<boolean>;

    @ContentChild(EBaseControl) private control: EBaseControl;
    @ContentChild(EDropdown) private dropdown: EDropdown;
    @ViewChild('icon') private iconElement: ElementRef<HTMLElement>;

    private _className: string;
    private _hint: string;
    private _label: string;
    private _width: InputWidth;
    private _error: string;
    private subs: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef) {
    }

    public ngAfterContentInit(): void {
        if (this.control) {
            this.isSelect = this.control.isSelect;
            if (this.control.stateChanges) {
                this.subs.add(this.control.stateChanges.subscribe((): void => {
                    this.readonly = this.control.readonly;
                    this.disabled = this.control.disabled;
                    this.cdr.markForCheck();
                }));
            }

            if (this.control.ngControl && this.control.ngControl.valueChanges) {
                this.subs.add(this.control.ngControl.statusChanges.subscribe((status: string): void  => {
                    this.hasError = status === 'INVALID';
                    this.cdr.markForCheck();
                }));
            }
        }

        if (this.dropdown) {
            this.isDropdown = true;
            this.focused = this.dropdown.focused;
            this.cdr.markForCheck();
        }
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    /**
     * @internal
     */
    public getInputSize(): string {
        return `_e_input_size_${this.width}`;
    }

}
