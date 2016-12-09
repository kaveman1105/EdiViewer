import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfviewComponent } from './pdfview.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng2-inline-svg';

import { Ng2UploaderModule } from 'ng2-uploader';

import { PDFViewService } from './pdfview.service';
import { FileUploadComponent } from './file-upload.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    HttpModule,
    Ng2UploaderModule
  ],
  declarations: [
    PdfviewComponent,
    PdfViewerComponent,
    FileUploadComponent
  ],
  exports: [
    PdfviewComponent
  ],
  providers: [
    PDFViewService
  ]
})
export class PDFViewModule { }
