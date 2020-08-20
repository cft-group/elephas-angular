import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EUpload } from './upload';
import { EUploadDragAndDrop } from './upload-drag-and-drop';
import { EUploadTruncateExt } from './upload-truncate-ext';
import { EUploadFileSize } from './upload-file-size';

@NgModule({
    declarations: [EUpload, EUploadFileSize, EUploadTruncateExt, EUploadDragAndDrop],
    imports: [
        CommonModule
    ],
    exports: [EUpload, EUploadFileSize, EUploadTruncateExt, EUploadDragAndDrop]
})
export class EUploadModule { }
