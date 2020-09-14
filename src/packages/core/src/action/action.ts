import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'button[eAction], a[eAction]',
    templateUrl: './action.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EAction {

    @HostBinding('class._e_action') public action: boolean = true;

}
