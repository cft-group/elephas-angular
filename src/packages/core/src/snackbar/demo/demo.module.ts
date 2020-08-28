import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ESnackbarService } from '../snackbar.service';
import { ESnackbar } from '../snackbar';
import { ESnackbarDemo } from './demo';
import { EButtonModule } from '../../button';

@NgModule({
    declarations: [ESnackbarDemo, ESnackbar],
    entryComponents: [ESnackbar],
    imports: [
        CommonModule,
        BrowserModule,
        EButtonModule
    ],
    providers: [ESnackbarService],
    exports: [ESnackbarDemo, ESnackbar]
})
export class ESnackbarDemoModule { }
