import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  consultar(uri: string): Observable<any> {
    return this.http.get(uri);
  }

  consultaGET() {
    return this.http;
  }

  consultaXML() {
    
  }
}
