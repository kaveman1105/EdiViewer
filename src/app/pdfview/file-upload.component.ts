import { Component, OnInit } from '@angular/core';
import { PDFViewService } from './pdfview.service';
import { FileShell } from './fileShell';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  private svgContents: string;
  private fileLoaded: boolean = false;
  private fileShell: FileShell;

  constructor(
    private pdfViewService: PDFViewService,
  ) { }

  ngOnInit() {
    this.fileShell = new FileShell();
  }

  fileChangeListener($event: any): void {
    let self = this;
    let file: File = $event.target.files[0];
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    this.fileShell.fileName = file.name;
    reader.onloadend = function (e) {

      self.fileShell.fileContents = reader.result;
      self.pdfViewService.upload(reader.result)
        .subscribe(
        body => {
          self.fileShell.returnContents = body;
          self.fileLoaded = true;
          //self.extractSVG(body);
          //self.setSvg();
        },
        error => console.log('Error: ' + error)
        );
    };
  }

  setSvg(): void {
    this.fileLoaded = true;

  }

  extractSVG(body: string) {
    this.svgContents = this.pdfViewService.extractSVG(body);
  }

  fileDrop($event) {
    console.log($event);
  }

}
