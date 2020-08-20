import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'e-action',
    templateUrl: './action.html'
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
