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

  insertdata(username:string,age:any,email:string,gender:string){
    return this.http.post(this.url+ '/insert',{username:username,age:age,email:email,gender:gender})  
  }
  delete(id:number){
    return this.http.put(this.url+ '/delete',{id:id})
  }

}
