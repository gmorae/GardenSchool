import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url : string) : Observable<any>{
    return this.http.get(url)
  }

  post(api: string, dados : any){
    return this.http.post(api, dados)
  }
}
