import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-dropdown-item',
    templateUrl: './dropdown-item.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDropdownItem {

    /**
     * Dropdown item value.
     */
    @Input() public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
        this.cdr.markForCheck();
    }

    /**
     * Dropdown item hint message.
     */
    @Input() public get hint(): string {
        return this._hint;
    }
    public set hint(hint: string) {
        this._hint = hint;
        this.cdr.markForCheck();
    }

    /**
     * Whether dropdown item is selected.
     */
    @Input() public get selected(): boolean {
        return this._selected;
    }
    public set selected(selected: boolean) {
        this._selected = selected;
        this.cdr.markForCheck();
    }

    /**
     * Event emitted when the dropdown item is selected.
     */
    @Output() public onSelectionChange: EventEmitter<string> = new EventEmitter<string>();
    @HostBinding('tabindex') public tabindex: number = -1;

    /**
     * @internal
     */
    public active: boolean = false;

    private _selected: boolean = false;
    private _hint: string;
    private _value: string;

    constructor(private cdr: ChangeDetectorRef) {
    }

    /**
     * @internal
     */
    public onSetItemActive(): void {
        this.onSelectionChange.emit(this.value);
    }

    /**
     * @internal
     */
    public setActiveStyles(): void {
        this.active = true;
        this.cdr.markForCheck();
    }

    /**
     * @internal
     */
    public setInactiveStyles(): void {
        this.active = false;
        this.cdr.markForCheck();
    }

}
