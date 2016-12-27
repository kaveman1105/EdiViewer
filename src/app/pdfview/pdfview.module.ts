import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PDFViewService } from './pdfview.service';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    SharedModule
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
