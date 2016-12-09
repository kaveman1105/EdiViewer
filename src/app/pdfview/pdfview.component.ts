import { Component, OnInit } from '@angular/core';
import { PDFViewService } from './pdfview.service';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {

  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  Page: number = 1;
  Zoom: number = 1;

  fileContents: string;

  constructor(private pdfViewService: PDFViewService) { }

  ngOnInit() {
  }

}
