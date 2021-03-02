import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'e-heading',
    templateUrl: './heading.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EHeading {

    @Input() public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }

    private _title: string;

}
