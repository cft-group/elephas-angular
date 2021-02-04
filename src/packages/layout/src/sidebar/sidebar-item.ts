import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: '[eSidebarItem]',
    templateUrl: './sidebar-item.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESidebarItem {

    @Input() public get tooltip(): string {
        return this._tooltip;
    }
    public set tooltip(tooltip: string) {
        this._tooltip = tooltip;
    }
    @Input() public get text(): string {
        return this._text;
    }
    public set text(text: string) {
        this._text = text;
    }
    @HostBinding('class._e_sidebar-item') public className: boolean = true;

    /**
     * @internal
     */
    public activeClass: string = '_e_sidebar-item_active';

    private _tooltip: string;
    private _text: string;

}
