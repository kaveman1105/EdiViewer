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
  private isdirty: boolean = false;
  private fileShell: FileShell;
  private error: string = '';

  constructor(
    private pdfViewService: PDFViewService,
  ) { }

  ngOnInit() {
    this.fileShell = new FileShell();
  }

  fileChangeListener($event: any): void {

    this.callWebService($event.target.files);
  }

  setSvg(): void {
    this.fileLoaded = true;

  }

  extractSVG(body: string) {
    this.svgContents = this.pdfViewService.extractSVG(body);
  }

  fileDrop($event) {
    this.callWebService($event);
  }

  callWebService(files: FileList) {
    this.error = '';
    this.isdirty = true;
    this.fileLoaded = false;
    let self = this;
    let file: File = files[0];
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    this.fileShell.fileName = file.name;
    reader.onloadend = function (e) {

      self.fileShell.fileContents = reader.result;
      self.pdfViewService.upload(reader.result)
        .subscribe(
        body => {
           //console.log(body);

          self.fileShell.returnContents = '' + body;
          self.fileLoaded = true;
          console.log(self.fileShell);
          //self.extractSVG(body);
          //self.setSvg();
        },
        error => {
          console.log('Error: ' + error);
          self.fileLoaded = false;
          self.isdirty = false;
          self.error = 'Error: ' + error;
        }
        );
    };
  }

}
