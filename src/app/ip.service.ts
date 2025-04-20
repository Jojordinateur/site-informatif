// src/app/ip.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private apiUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) {}

  getIpInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}