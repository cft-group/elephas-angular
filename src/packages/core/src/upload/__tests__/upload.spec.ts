import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EUpload } from '../upload';

describe('EUpload', (): void => {
    let component: EUpload;
    let fixture: ComponentFixture<EUpload>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EUpload ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EUpload);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
