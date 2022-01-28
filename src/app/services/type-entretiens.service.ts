import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeEntretiensService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/typeEnt'

  getAllTypes(){
     return this._http.get(`${this.apiUrl}`)
  }

}
