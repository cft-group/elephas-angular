import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {ETooltipPosition} from './models';

@Component({
    selector: 'e-tooltip',
    template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ETooltip {

    /**
     * Tooltip position.
     */
    @Input() public get position(): ETooltipPosition {
        return this.tooltipPosition;
    }
    public set position(position: ETooltipPosition) {
        this.tooltipPosition = position;
    }
    @HostBinding('class._e_tooltip') public tooltip: boolean = true;
    @HostBinding('class._e_tooltip_top') public get isTooltipTop(): boolean {
        return this.position === 'top';
    }
    @HostBinding('class._e_tooltip_top-right') public get isTooltipTopRight(): boolean {
        return this.position === 'top-right';
    }
    @HostBinding('class._e_tooltip_right') public get isTooltipRight(): boolean {
        return this.position === 'right';
    }
    @HostBinding('class._e_tooltip_bottom-right') public get isTooltipBottomRight(): boolean {
        return this.position === 'bottom-right';
    }
    @HostBinding('class._e_tooltip_bottom') public get isTooltipBottom(): boolean {
        return this.position === 'bottom';
    }
    @HostBinding('class._e_tooltip_bottom-left') public get isTooltipBottomLeft(): boolean {
        return this.position === 'bottom-left';
    }
    @HostBinding('class._e_tooltip_left') public get isTooltipLeft(): boolean {
        return this.position === 'left';
    }
    @HostBinding('class._e_tooltip_top-left') public get isTooltipTopLeft(): boolean {
        return this.position === 'top-left';
    }

    private tooltipPosition: ETooltipPosition;

}
