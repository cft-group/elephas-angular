import {ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {EBaseInput} from '../base-input/base-input';
import {Option} from './models';

const noop: any = (): void => {};

export const SELECT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((): any => ESelect),
    multi: true
};

@Component({
    selector: 'e-select',
    templateUrl: './select.html',
    providers: [SELECT_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESelect extends EBaseInput {

    /**
     * Select options.
     */
    @Input() public options: Option[];

    /**
     * @internal
     */
    public value: string;

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    /**
     * @internal
     */
    public writeValue(value: any): void {
        if (value !== this.value) {
            this.value = value;
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
