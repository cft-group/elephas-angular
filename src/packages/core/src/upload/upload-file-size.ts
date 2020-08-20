import { Pipe, PipeTransform } from '@angular/core';

const units: string[] = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
];

const byte: number = 1024;

@Pipe({
    name: 'eFileSize'
})
export class EUploadFileSize implements PipeTransform {

    public transform(bytes: number, precision: number = 2): string {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return null;
        }

        let unit: number = 0;

        while (bytes >= byte) {
            bytes /= byte;
            unit++;
        }

        const convertBytes: string = bytes.toFixed(precision) + ' ' + units[unit];
        return convertBytes;
    }

}
