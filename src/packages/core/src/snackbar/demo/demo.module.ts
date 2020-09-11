import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';

import {ESnackbarService} from '../snackbar.service';
import {ESnackbarDemo} from './demo';
import {EButtonModule} from '../../button';
import {ESnackbarModule} from '../snackbar.module';

@NgModule({
    declarations: [ESnackbarDemo],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        EButtonModule,
        OverlayModule,
        ESnackbarModule
    ],
    providers: [ESnackbarService],
    exports: [ESnackbarDemo]
})
export class ESnackbarDemoModule { }
