import {Directive, ElementRef, OnChanges, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {EBaseControl} from '../base-input/base-control';
import {EBaseInputControl} from '../base-input/base-input-control';

@Directive({
    selector: 'select[eSelect]',
    providers: [{ provide: EBaseControl, useExisting: ESelect }]
})
export class ESelect extends EBaseInputControl implements EBaseControl, OnChanges, OnInit, OnDestroy {

    /**
     * @internal
     */
    public isSelect: boolean;

    constructor(private elementRef: ElementRef<HTMLSelectElement>, @Optional() @Self() private ngCtrl: NgControl) {
        super(ngCtrl);
    }

    public ngOnChanges(): void {
        this.stateChanges.next();
    }

    public ngOnInit(): void {
        const element: HTMLSelectElement = this.elementRef.nativeElement;
        this.isSelect = element.nodeName.toLocaleLowerCase() === 'select';
    }

    public ngOnDestroy(): void {
        this.stateChanges.complete();
    }

}
