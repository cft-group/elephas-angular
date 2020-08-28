import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-banner',
    templateUrl: './banner.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EBanner {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'danger' | 'warning';
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Click handler for close icon.
     */
    @Output() public onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    /**
     * @internal
     */
    public onClose(ev: MouseEvent): void {
        this.onClick.emit(ev);
    }

}
