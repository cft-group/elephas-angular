import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBadge } from '../badge';

describe('ElBadge', (): void => {
    let component: EBadge;
    let fixture: ComponentFixture<EBadge>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBadge ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBadge);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as className "undefined"', (): void => {
        expect(component.className).toEqual(undefined);
    });

    it('should have as appearance "default"', (): void => {
        expect(component.appearance).toEqual('default');
    });
});
