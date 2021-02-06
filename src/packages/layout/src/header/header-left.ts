import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-header-left, [eHeaderLeft]',
    template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EHeaderLeft {

    @HostBinding('class._e_header__left') public headerLeftClass: boolean = true;

}
