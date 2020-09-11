import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESnackbar} from './snackbar';
import {ESnackbarService} from './snackbar.service';
import {EButtonModule} from '../button/button.module';

@NgModule({
    declarations: [ESnackbar],
    entryComponents: [ESnackbar],
    imports: [
        CommonModule,
        EButtonModule
    ],
    providers: [ESnackbarService],
    exports: [ESnackbar]
})
export class ESnackbarModule { }
