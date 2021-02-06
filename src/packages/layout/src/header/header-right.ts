import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-header-right, [eHeaderRight]',
    template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EHeaderRight {

    @HostBinding('class._e_header__right') public headerRightClass: boolean = true;

}
