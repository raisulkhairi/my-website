import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
REST_API:string = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  // get user
  getUser():Observable<any>{
    return this.http.get(`${this.REST_API}/getUser`)
  }
}
