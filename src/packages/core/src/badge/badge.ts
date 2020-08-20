import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-badge',
    templateUrl: './badge.html',
    encapsulation: ViewEncapsulation.None
})
export class EBadge {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'default' | 'alert' = 'default';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;

}
