import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  consultaServiceRest() {
    return this.http;
  }

  consultaServiceSOAP() {
    return this.http;
  } 
}
