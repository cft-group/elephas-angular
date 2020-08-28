import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'e-chip',
    templateUrl: './chip.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EChip {

    /**
     * Chip selected state.
     */
    @Input() public selected: boolean;
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public change(event: MouseEvent): void {
        this.selected = !this.selected;
        this.onChange.emit(event);
    }

}
