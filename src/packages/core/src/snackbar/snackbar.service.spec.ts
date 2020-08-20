/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ESnackbarService } from './snackbar.service';

describe('Service: ESnackbar', (): void => {
    beforeEach((): void => {
        TestBed.configureTestingModule({
            providers: [ESnackbarService]
        });
    });

    it('should ...', inject([ESnackbarService], (service: ESnackbarService): void => {
        expect(service).toBeTruthy();
    }));
});
