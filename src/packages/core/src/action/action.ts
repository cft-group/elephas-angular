import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-action',
    templateUrl: './action.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EAction {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Click handler.
     */
    @Output() public onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

}
