import {Component} from '@angular/core';

@Component({
    selector: 'e-demo',
    template: `
        <e-tabs>
            <e-tab
                *ngFor="let tab of tabs"
                [title]="tab.title"
                [routerLink]="tab.link">
            </e-tab>
        </e-tabs>
        <router-outlet></router-outlet>
    `
})
export class EDemo {

    public tabs: any[] = [
        {
            title: 'Home',
            link: 'home'
        },
        {
            title: 'About',
            link: 'about'
        }
    ];

}
