import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
    selector: 'e-datalist-content',
    templateUrl: './datalist-content.html',
    encapsulation: ViewEncapsulation.None
})
export class EDatalistContent implements OnInit {

    @Input() public content: any;
    public contentPortal: ComponentPortal<any>;

    public ngOnInit(): void {
        if (typeof this.content !== 'string') {
            this.contentPortal = new ComponentPortal<any>(this.content);
        }
    }

}
