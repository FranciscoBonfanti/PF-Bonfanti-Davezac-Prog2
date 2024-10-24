import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private apiURL = 'http://localhost:4000/api/obtenerUsuarios'

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{

    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjk2MDc1MzY5NTgsImlhdCI6MTcyOTYwNTczNn0.cR0m-U1OHSRbVINvz59bfM8vwrgfA4bPweinZPBhVoM'});


    return this.http.get<any>(this.apiURL, { 'headers': headers });
    
  }

  

}
