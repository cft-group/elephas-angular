import {Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input, ViewEncapsulation} from '@angular/core';
import {EBaseInput} from '../base-input/base-input';

@Component({
    selector: 'e-textarea',
    templateUrl: './textarea.html',
    encapsulation: ViewEncapsulation.None
})
export class ETextarea extends EBaseInput implements OnChanges, OnInit, OnDestroy {

    @Input() public rows: number;

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
