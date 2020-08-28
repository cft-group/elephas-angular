import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'e-info',
    templateUrl: './info.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EInfo {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'error' | 'warning';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Fixed width flag.
     */
    @Input() public fixedWidth: boolean = false;

}
