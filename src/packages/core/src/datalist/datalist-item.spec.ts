import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDatalistItem } from './datalist-item';

describe('EDatalistItem', (): void => {
    let component: EDatalistItem;
    let fixture: ComponentFixture<EDatalistItem>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDatalistItem ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDatalistItem);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
