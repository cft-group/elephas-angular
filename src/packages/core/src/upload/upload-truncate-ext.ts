import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eTruncateExt'
})
export class EUploadTruncateExt implements PipeTransform {

    public transform(value: string, isExt: boolean = false): string {
        if (!value) {
            return null;
        }
        let newValue: string = '';
        if (!isExt) {
            newValue = value.replace(/\.[^.]+$/, '');
        } else {
            newValue = value.match(/\.[^.]+$/gi)[0];
        }
        return newValue;
    }
}
