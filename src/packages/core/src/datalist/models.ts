export interface DataListItem {
    /**
     * Visual appearance.
     * @default default
     */
    appearance?: 'default' | 'danger' | 'warning';

    /**
     * Item title.
     */
    title: any;

    /**
     * Item value.
     */
    value?: any;
}

export interface DataList {
    /**
     * Additional CSS class.
     */
    className?: string;

    /**
     * List items.
     */
    items: DataListItem[];

    /**
     * Title width in pixels.
     * @default 172
     */
    titleWidth?: number;
}
