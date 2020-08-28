import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-tooltip',
    templateUrl: './tooltip.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ETooltip {

    /**
     * Tooltip position.
     */
    @Input() public position: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Tooltip text.
     */
    @Input() public text: string;

}
