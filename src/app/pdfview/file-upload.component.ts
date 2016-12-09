import { Component, OnInit } from '@angular/core';
import { PDFViewService } from './pdfview.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  private svgContents: string;
  private fileLoaded: boolean = false;
  private xmlData: SafeHtml;

  constructor(
    private pdfViewService: PDFViewService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }


  fileChangeListener($event: any): void {
    let self = this;
    let file: File = $event.target.files[0];
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = function (e) {
      self.pdfViewService.upload(reader.result)
        .subscribe(
        body => {
          self.extractSVG(body);
          self.setSvg();
        },
        error => console.log('Error: ' + error)
        );
    };
  }

  setSvg(): void {
    this.fileLoaded = true;
    this.xmlData = this.sanitizer.bypassSecurityTrustHtml(this.svgContents);
  }

  extractSVG(body: string) {
    this.svgContents = this.pdfViewService.extractSVG(body);
  }

}
