import { GlobalService } from "./../global/global.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpService {
  headers = new HttpHeaders();
  options = { headers: this.headers, withCredentials: true };

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  get(url: string, options?): Observable<any> {
    return this.request("get", [url, { ...this.options, ...options }]);
  }

  post(url: string, data: Object, options?): Observable<any> {
    return this.request("post", [url, data, { ...this.options, ...options }]);
  }

  put(url: string, data: Object, options?): Observable<any> {
    return this.request("put", [url, data, { ...this.options, ...options }]);
  }

  delete(url: string): Observable<any> {
    return this.request("delete", [url, this.options]);
  }

  request(type: string, params: any[]) {
    params[0] = `${environment.apiUrl}${params[0]}`;

    this.globalService.addRequest(params[0], type);

    return this.http[type](...params).pipe(
      map(d => {
        this.globalService.removeRequest(params[0], type);
        return d;
      }),
      catchError(err => {
        this.globalService.removeRequest(params[0], type);
        return throwError(err);
      })
    );
  }
}
