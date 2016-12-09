/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfviewComponent } from './pdfview.component';

describe('PdfviewComponent', () => {
  let component: PdfviewComponent;
  let fixture: ComponentFixture<PdfviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
