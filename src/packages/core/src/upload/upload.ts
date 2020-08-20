import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation, OnInit } from '@angular/core';
import * as mime from 'mime';

let nextUniqueId: number = 0;

@Component({
    selector: 'e-upload',
    templateUrl: './upload.html',
    encapsulation: ViewEncapsulation.None
})
export class EUpload implements OnInit {

    /**
     * Clickable text shown inside the upload box.
     */
    @Input() public actionText: string;
    /**
     * Upload label.
     */
    @Input() public label: string;
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Hint message shown below actionText.
     */
    @Input() public hint: string;
    /**
     * Error message. Must be set when appearance is set to error.
     */
    @Input() public error: string;
    /**
     * Upload id attribute.
     */
    @Input() public inputId: string = `el-upload-${++nextUniqueId}`;
    /**
     * Visual appearance.
     */
    @Input() public appearance: 'error' | 'default' | 'disabled' | 'readonly' = 'default';
    /**
     * File size limit for each file, in bytes.
     */
    @Input() public singleFileMaxSize: number;
    /**
     * Error message which is shown when file size is larger than maxFileSize.
     */
    @Input() public singleFileMaxSizeError: string;
    /**
     * A boolean which indicates that the user may choose more than one file.
     */
    @Input() public multiple: boolean = false;
    /**
     * One or more unique file type specifiers describing file types to allow.
     */
    @Input() public accept: string;
    /**
     * Error message which is shown when file type does not match types provided in accept.
     */
    @Input() public acceptError: string;
    /**
     * Change handler.
     */
    @Output() public onChange: EventEmitter<File[]> = new EventEmitter<File[]>();

    /**
     * @internal
     */
    public isFocused: boolean = false;

    /**
     * @internal
     */
    public files: File[] = [];

    /**
     * @internal
     */
    public filesList: File[] = [];

    /**
     * @internal
     */
    public errors: string[] = [];
    @ViewChild('fileInput') private fileInput: ElementRef<HTMLInputElement>;
    private mimeTypes: string[] = [];

    public ngOnInit(): void {
        this.initMimeTypes();
    }

    /**
     * @internal
     */
    public onFocus(isFocused: boolean): void {
        this.isFocused = isFocused;
    }

    /**
     * @internal
     */
    public onDropped(files?: FileList): void {
        if (!files) {
            this.droppedFiles(this.fileInput.nativeElement.files);
        } else {
            this.droppedFiles(files);
        }
    }

    /**
     * @internal
     */
    public onDeleteFile(fileIndex: number): void {
        const file: File = this.filesList[fileIndex];
        this.filesList.splice(fileIndex, 1);
        this.files.splice(this.files.indexOf(this.files.find((f: File): boolean => f.name === file.name)), 1);
        this.onChange.emit(this.files);
    }

    private droppedFiles(files: FileList): void {
        if (!this.multiple) {
            this.filesList = [];
            this.files = [];
            this.addNewFile(files[0], 0);
        } else {
            let index: number = this.filesList.length;
            for (let i: number = 0; i < files.length; i++) {
                this.addNewFile(files[i], index);
                index++;
            }
        }
        this.onChange.emit(this.files);
    }

    private addNewFile(file: File, fileIndex: number): void {
        this.filesList.push(file);
        if (this.singleFileMaxSize && file.size > this.singleFileMaxSize) {
            this.errors[fileIndex] = this.singleFileMaxSizeError;
        } else if (this.accept && !this.checkFileType(file)) {
            this.errors[fileIndex] = this.acceptError;
        } else {
            this.errors[fileIndex] = null;
            this.files.push(file);
        }
    }

    private initMimeTypes(): void {
        if (this.accept) {
            const mimeTypes: string[] = this.accept.split(',');
            if (mimeTypes && mimeTypes.length) {
                for (let i: number = 0; i < mimeTypes.length; i++) {
                    let mimeType: string = mime.getType(mimeTypes[i]);
                    if (!mimeType) {
                        const ext: string = mime.getExtension(mimeTypes[i]);
                        if (ext) {
                            mimeType = mime.getType(ext);
                        } else {
                            const isAllMimeTypes: boolean = /\/(\*)$/gi.test(mimeTypes[i]);
                            mimeType = isAllMimeTypes ? (mimeTypes[i].split('/')[0]).trim() : null;
                        }
                    }
                    this.mimeTypes.push(mimeType);
                }
            }
        }
    }

    private checkFileType(file: File): boolean {
        return this.mimeTypes.some((mimeType: string): boolean => file.type.indexOf(mimeType) !== -1);
    }

}
