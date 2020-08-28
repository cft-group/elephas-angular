import {Component} from '@angular/core';
import {ESnackbarService} from '../snackbar.service';

@Component({
    selector: 'e-snackbar-demo',
    template: `<button eButton (click)="onClick()">Show Snackbar</button>`,
    providers: [ESnackbarService]
})
export class ESnackbarDemo {

    constructor(private snackbarService: ESnackbarService) { }

    public onClick(): void {
        this.snackbarService.open({ text: 'Action completed...', buttonText: 'Отменить' });
    }

}
