import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-menu',
    templateUrl: './menu.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EMenu {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;

}
