import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-tag',
    templateUrl: './tag.html',
    encapsulation: ViewEncapsulation.None
})
export class ETag {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'default' | 'danger' | 'success' | 'warning' = 'default';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;

}
