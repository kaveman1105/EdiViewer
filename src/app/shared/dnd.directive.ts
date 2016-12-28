import { Directive, HostBinding, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({ selector: '[appDnd]' })
export class DndDirective {

    @Output() fileDrop: EventEmitter<any> = new EventEmitter();

    hover: boolean = false;
    constructor() { }

    @HostBinding('class.hover') get isHover() {
        return this.hover;
    }

    @HostBinding('draggable') get draggable() {
        return true;
    }

    @HostListener('dragstart', ['$event']) onDragStart($event) {
        $event.preventDefault();

    }
    @HostListener('dragover', ['$event']) onDragOver($event) {
        $event.preventDefault();
    }

    @HostListener('dragend', ['$event']) onDragEnd($event) {
        $event.preventDefault();

    }

    @HostListener('dragenter', ['$event']) onDragEnter($event) {

        this.hover = true;
    }
    @HostListener('dragleave', ['$event']) onDragExit($event) {
        this.hover = false;
    }

    @HostListener('drop', ['$event']) onDrop($event) {
        $event.preventDefault();
        this.hover = false;
        this.fileDrop.emit($event.dataTransfer.files);
    }

}
