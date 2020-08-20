import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESection} from './section';

@NgModule({
      declarations: [ESection],
      imports: [
          CommonModule
      ],
    exports: [
        ESection
    ]
})
export class ESectionModule { }
