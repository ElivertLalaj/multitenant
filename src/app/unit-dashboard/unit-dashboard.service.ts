import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitDashboardService {

  url : string = 'http://localhost:8080/api/v1/unit/'

  // http:localhost:8080/api/v1/unit/?id=3&name=lindo&description=fasdada&parent_id=3' 
  constructor(
    private http: HttpClient
  ) { }

  getUnitDashboardData<T>() : Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.get<T>(this.url + 'all', { headers: headers });
  

  }

  addUnitDashboard<T>(data: any): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
      });

      return this.http.post<T>(this.url + `?id=${data.id}&name=${encodeURIComponent(data.name)}&description=${encodeURIComponent(data.description)}&parent_id=${data.parent_id}` , data, { headers: headers });
  }

  // getUnitById<T>(UnitId: String) : Observable<T> {
  //   const headers = new HttpHeaders ({
  //     'Authorization': "Bearer " + localStorage.getItem('token'),

  //   })

  //   return this.http.get<T>(this.url + `/` + UnitId ,{headers : headers});
  // }

  // updateUnitDashboard<T>(UnitId: number, data: any): Observable<T> {
  //   const url = this.url + `?id=${data.id}&name=${encodeURIComponent(data.name)}&description=${encodeURIComponent(data.description)}&parent_id=${data.parent_id}` + UnitId
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + localStorage.getItem('token'),
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.put<T>(this.url  , data, { headers: headers });
  // }


  // deleteUnit<T>(UnitId: number ) : Observable<T> {
  //   const headers = new HttpHeaders ({
  //     'Authorization': "Bearer " + localStorage.getItem('token'),

  //   })

  //   return this.http.delete<T>(this.url + `/${UnitId}` ,{headers : headers});
  // }



}
