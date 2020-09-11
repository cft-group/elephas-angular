import {TestBed, ComponentFixture, fakeAsync, waitForAsync} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {ESnackbarService} from '../snackbar.service';
import {SnackbarConfig} from '../models';
import {ESnackbar} from '../snackbar';

describe('Service: ESnackbar', (): void => {
    let snackbarService: ESnackbarService;
    let component: ESnackbar;
    let fixture: ComponentFixture<ESnackbar>;
    const snackbarConfig: SnackbarConfig = { text: 'Action completed...', buttonText: 'Cancel' };

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [OverlayModule, BrowserAnimationsModule],
            providers: [ESnackbarService],
            declarations: [ESnackbar]
        }).compileComponents();

        snackbarService = TestBed.inject(ESnackbarService);
        fixture = TestBed.createComponent(ESnackbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(snackbarService).toBeTruthy();
    });

    it('should snackbar open', (): void => {
        snackbarService.open(snackbarConfig);
    });

    it('should snackbar close', fakeAsync((done: DoneFn): void => {
        component.onClose();
        snackbarService.afterClose().subscribe((): void => {
            done();
        });
    }));
});
