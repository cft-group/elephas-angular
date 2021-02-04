import {Component, NO_ERRORS_SCHEMA, Renderer2, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ESidebarIcon} from '../sidebar-icon';

let renderer: Renderer2;

@Component({
    template: `
        <div *eSidebarIcon></div>`
})
class TestSidebarIcon {
}

describe('ESidebarIcon', (): void => {
    let fixture: ComponentFixture<TestSidebarIcon>;

    const templateRef: jasmine.SpyObj<TemplateRef<any>> = jasmine.createSpyObj('TemplateRef', ['insert']);
    const vcRef: jasmine.SpyObj<ViewContainerRef> = jasmine.createSpyObj('ViewContainerRef', ['insert']);

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebarIcon],
            providers: [Renderer2],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(TestSidebarIcon);
        renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    }));

    it('should create an instance', (): void => {
        const directive: ESidebarIcon = new ESidebarIcon(renderer, templateRef, vcRef);

        fixture.detectChanges();

        expect(directive).toBeTruthy();
    });
});
