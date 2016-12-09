import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PDFViewService } from './pdfview.service';
import { FileUploadComponent } from './file-upload.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ],
  providers: [
    PDFViewService
  ]
})
export class PDFViewModule { }
