import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServisetestService {
  url='http://localhost:4000';

  constructor(private http:HttpClient) { }

  getAll(){
   return this.http.get(this.url+ '/getall');
  }
  insertdata(){
    // return this.http.post(this.url)
  }
}
