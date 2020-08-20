import {Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, OnDestroy, Input} from '@angular/core';
import {EBaseInput} from '../base-input/base-input';

@Component({
    selector: 'e-input',
    templateUrl: './input.html',
    encapsulation: ViewEncapsulation.None
})
export class EInput extends EBaseInput implements OnChanges, OnInit, OnDestroy {

    @Input() public type: string = 'text';

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.control && 'appearance' in changes) {
            this.setControlDisable();
        }
        if (this.value && 'value' in changes) {
            this.setControlValue();
        }
    }

    public ngOnInit(): void {
        this.setControlValue();
        this.setControlDisable();
        this.errorControlSubscribe();
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
