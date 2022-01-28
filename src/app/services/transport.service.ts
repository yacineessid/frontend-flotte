import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private _http:HttpClient) { }
apiUrl='http://localhost:3000/transport'


postTransport(body:object):Observable<any>{
  return this._http.post(`${this.apiUrl}`,body)
}

getTransport():Observable<any>{
  return this._http.get(`${this.apiUrl}`)
}


deletetTransport(id:number):Observable<any>{
  return this._http.delete(`${this.apiUrl}/${id}`)
}

}
