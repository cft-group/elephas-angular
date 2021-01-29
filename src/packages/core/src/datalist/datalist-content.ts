import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
    selector: 'e-datalist-content',
    templateUrl: './datalist-content.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDatalistContent implements OnInit {

    @Input() public get content(): any {
        return this._content;
    }
    public set content(content: any) {
        this._content = content;
    }

    /**
     * @internal
     */
    public contentPortal: ComponentPortal<any>;

    private _content: any;

    public ngOnInit(): void {
        if (typeof this.content !== 'string') {
            this.contentPortal = new ComponentPortal<any>(this.content);
        }
    }

}
