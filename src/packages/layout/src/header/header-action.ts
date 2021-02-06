import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-header-action, [eHeaderAction]',
    templateUrl: './header-action.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EHeaderAction {

    @Input() public get tooltip(): string {
        return this._tooltip;
    }
    public set tooltip(tooltip: string) {
        this._tooltip = tooltip;
    }

    @HostBinding('class._e_header-action') public headerActionClass: boolean = true;

    private _tooltip: string;

}
