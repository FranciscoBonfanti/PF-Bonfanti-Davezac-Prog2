import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private apiURL = 'http://localhost:4000/api/obtenerUsuarios'

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
}
