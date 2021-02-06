import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-header, [eHeader]',
    templateUrl: './header.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EHeader {

    @HostBinding('class._e_header') public headerClass: boolean = true;

}
