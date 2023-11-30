import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getdata(data: any) {
    const jsonData = JSON.stringify(data);
    return this._http.post('http://127.0.0.1:5000/api/data', data);
  }
}
