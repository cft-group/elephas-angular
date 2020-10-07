import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationExtras, Router, Routes } from '@angular/router';

import { ETabTitle } from '../tab-title';
import { EHome } from '../demo/home/home';

describe('ETabTitle', (): void => {
    let component: ETabTitle;
    let fixture: ComponentFixture<ETabTitle>;
    let router: Router;
    const routes: Routes = [
        {
            path: 'home',
            component: EHome
        }
    ];

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(routes) ],
            declarations: [ ETabTitle ]
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETabTitle);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should navigate', (): void => {
        const navigateSpy: jasmine.Spy<(commands: any[], extras?: NavigationExtras) => Promise<boolean>> = spyOn(router, 'navigate');

        router.navigate(['home']);
        expect(navigateSpy).toHaveBeenCalledWith(['home']);
    });
});
