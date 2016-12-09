import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PDFViewService {

    private url: string = 'http://formviewerpoc20161114023307.azurewebsites.net/api/upload';
    constructor(
        private http: Http
    ) { }


    upload(fileContent: string): Observable<string> {

        let body: string = fileContent;
        let headers = new Headers({ 'Content-Type': 'text/plain' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, body, options)
            .map((res: Response) => body = res.text())
            .catch((error: any) => Observable.throw(error || 'server error'));
    }


    extractSVG(body: string): string {
        let sliceStart = body.indexOf('<svg ');
        let sliceEnd = body.indexOf('</svg>');
        return(body.slice(sliceStart, sliceEnd + 6));
    }
}
