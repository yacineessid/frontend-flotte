import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/fournisseur'

getAllFournisseurs(){
  return this._http.get(`${this.apiUrl}`)
}

}
