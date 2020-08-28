import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-spinner',
    templateUrl: './spinner.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESpinner {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;

}
