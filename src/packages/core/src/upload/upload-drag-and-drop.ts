import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[eUpload]'
})
export class EUploadDragAndDrop {

    @Output() public fileDropped: EventEmitter<FileList> = new EventEmitter<FileList>();
    @Output() public fileFocus: EventEmitter<boolean> =  new EventEmitter<boolean>();

    @HostListener('drop', ['$event'])
    public onDrop(event: DragEvent): void {
        this.eventPreventDefault(event);
        const transfer: DataTransfer = event.dataTransfer;
        this.fileDropped.emit(transfer.files);
        this.fileFocus.emit(false);
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(event: DragEvent): void {
        this.eventPreventDefault(event);
        event.stopPropagation();
        this.fileFocus.emit(true);
    }

    @HostListener('dragenter', ['$event'])
    public onDragEnter(event: DragEvent): void {
        this.eventPreventDefault(event);
        this.fileFocus.emit(true);
    }

    @HostListener('dragend', ['$event'])
    public onDragEnd(event: DragEvent): void {
        this.eventPreventDefault(event);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: DragEvent): void {
        this.eventPreventDefault(event);
        this.fileFocus.emit(false);
    }

    private eventPreventDefault(event: DragEvent): void {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

}
