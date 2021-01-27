import {Directive, HostBinding, Input, OnChanges, OnDestroy} from '@angular/core';
import {EBaseControl, EBaseControlRef} from '../base-input';

@Directive({
    selector: 'input[eInput], textarea[eTextarea]',
    providers: [{ provide: EBaseControl, useExisting: EInput }]
})
export class EInput extends EBaseControlRef implements EBaseControl, OnChanges, OnDestroy {

    /**
     * Whether input is readonly.
     */
    @Input() public readonly: boolean = false;

    /**
     * Whether input is placeholder.
     */
    @Input()
    @HostBinding('placeholder') public placeholder: string = ' ';

    @HostBinding('readonly') public get readonlyState(): boolean {
        this.stateChanges.next();
        return this.readonly;
    }

    public ngOnChanges(): void {
        this.stateChanges.next();
    }

    public ngOnDestroy(): void {
        this.stateChanges.complete();
    }

}
