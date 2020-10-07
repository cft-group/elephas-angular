import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMenu } from '../menu';

describe('EMenu', (): void => {
    let component: EMenu;
    let fixture: ComponentFixture<EMenu>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EMenu ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EMenu);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
