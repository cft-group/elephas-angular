import {HostBinding, Input, Optional, Self} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {NgControl} from '@angular/forms';
import {Subject} from 'rxjs';

export abstract class EBaseControlRef {

    @Input()
    public get disabled(): boolean {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    public set disabled(disabled: boolean) {
        this._disabled = coerceBooleanProperty(disabled);
    }

    @Input()
    public set disabledControl(condition: boolean) {
        if (this.ngControl) {
            const action: string = condition ? 'disable' : 'enable';
            this.ngControl.control[action]();
        }
    }

    /**
     * Whether input is readonly.
     */
    @Input()
    @HostBinding('required') public required: string = 'required';

    /**
     * @internal
     */
    public readonly stateChanges: Subject<void> = new Subject<void>();

    @HostBinding('disabled') public get disabledState(): boolean {
        this.stateChanges.next();
        return this.disabled;
    }

    /**
     * @internal
     */
    protected _disabled: boolean = false;

    @HostBinding('class') private readonly class: string = '_e_input__control';

    /**
     * @internal
     */
    constructor(@Optional() @Self() public ngControl: NgControl) { }

}
