import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-breadcrumbs',
    templateUrl: './breadcrumbs.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EBreadcrumbs {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;

}
