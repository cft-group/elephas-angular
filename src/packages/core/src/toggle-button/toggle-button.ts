import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {EToggleButtonItem} from './models';

@Component({
    selector: 'e-toggle-button',
    templateUrl: './toggle-button.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EToggleButton implements OnChanges {

    /**
     * If true, allow many of the items to be selected.
     * @default false
     */
    @Input() public get multiple(): boolean {
        return this._multiple;
    }
    public set multiple(multiple: boolean) {
        this._multiple = multiple;
    }
    /**
     * Selected value.
     */
    @Input() public get value(): string | string[] {
        return this._value;
    }
    public set value(value: string | string[]) {
        this._value = value;
    }
    /**
     * Toggle button options.
     */
    @Input() public get items(): string[] {
        return this._items;
    }
    public set items(items: string[]) {
        this._items = items;
    }

    @Output() public toggle: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();

    @HostBinding('class._e_toggle-button') public toggleButtonClass: boolean = true;

    /**
     * @internal
     */
    public toggleButtonItems: EToggleButtonItem[];

    private _multiple: boolean = false;
    private _value: string | string[];
    private _items: string[];

    public ngOnChanges(changes: SimpleChanges): void {
        if ((this.items && 'items' in changes) || (this.value && 'value' in changes)) {
            this.toggleButtonItems = this.items.map((item: string): EToggleButtonItem => {
                const toggleButtonItem: EToggleButtonItem = {
                    item: item,
                    selected: this.value ? typeof this.value === 'string' ? item === this.value : this.value.some((v: string): boolean => v === item) : false
                };
                return toggleButtonItem;
            });
        }
    }

    /**
     * @internal
     */
    public onToggle(toggleButton: EToggleButtonItem): void {
        const selected: boolean = toggleButton.selected;
        if (!this.multiple) {
            this.toggleButtonItems.forEach((toggleButtonItem: EToggleButtonItem): void => {
                toggleButtonItem.selected = false;
            });
        }
        toggleButton.selected = !selected;
        if (!this.multiple) {
            this.toggle.emit(toggleButton.item);
        } else {
            const items: string[] = this.toggleButtonItems.map((item: EToggleButtonItem): string => {
                if (item.selected) {
                    return item.item;
                }
                return null;
            }).filter((i: string): boolean => !!i);
            this.toggle.emit(items);
        }
    }

}
