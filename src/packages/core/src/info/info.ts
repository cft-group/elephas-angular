import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'e-info',
    templateUrl: './info.html'
})
export class EInfo implements OnInit {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'error' | 'warning';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Fixed width flag.
     */
    @Input() public fixedWidth: boolean = false;

    public ngOnInit(): void {
    }

}
