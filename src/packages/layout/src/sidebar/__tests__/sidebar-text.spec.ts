import {Component, NO_ERRORS_SCHEMA, Renderer2, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ESidebarText} from '../sidebar-text';

let renderer: Renderer2;

@Component({
    template: `
        <div *eSidebarText></div>`
})
class TestSidebarText {
}

describe('SidebarText', (): void => {
    let fixture: ComponentFixture<TestSidebarText>;

    const templateRef: jasmine.SpyObj<TemplateRef<any>> = jasmine.createSpyObj('TemplateRef', ['insert']);
    const vcRef: jasmine.SpyObj<ViewContainerRef> = jasmine.createSpyObj('ViewContainerRef', ['insert']);

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebarText],
            providers: [Renderer2],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(TestSidebarText);
        renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    }));

    it('should create an instance', (): void => {
        const directive: ESidebarText = new ESidebarText(renderer, templateRef, vcRef);

        fixture.detectChanges();

        expect(directive).toBeTruthy();
    });
});
