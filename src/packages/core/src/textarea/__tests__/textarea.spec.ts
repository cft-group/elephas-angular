import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETextarea } from '../textarea';

describe('ETextarea', (): void => {
    let component: ETextarea;
    let fixture: ComponentFixture<ETextarea>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETextarea ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETextarea);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
