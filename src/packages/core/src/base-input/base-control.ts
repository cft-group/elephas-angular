import {Directive} from '@angular/core';
import {NgControl} from '@angular/forms';
import {Subject} from 'rxjs';

@Directive()
export abstract class EBaseControl {

    /**
     * Whether the control is disabled.
     */
    public readonly disabled: boolean;

    /**
     * Stream that emits whenever the state of the control changes such that the parent `EBaseInput`
     * needs to run change detection.
     */
    public readonly stateChanges: Subject<void>;

    /**
     * Gets the NgControl for this control.
     */
    public readonly ngControl: NgControl | null;

    /**
     * Whether the control is readonly.
     */
    public readonly readonly?: boolean;

    /**
     * Whether the control is focused.
     */
    public readonly focused?: Subject<boolean>;

    /**
     * The placeholder for this control.
     */
    public readonly placeholder?: string;

    public readonly isSelect?: boolean;

}
