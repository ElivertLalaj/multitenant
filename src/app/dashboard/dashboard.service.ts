import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  url: String = 'http://localhost:8080/api/v1/tenant/';

  getTenant<T>(): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.get<T>(this.url + 'all', { headers: headers });
  }


  addTenant<T>(data: any): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.post<T>(this.url + 'createdb', data , { headers: headers });
  }
}
