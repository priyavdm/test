import { Component, OnInit } from '@angular/core';
import { ServisetestService } from "../servisetest.service";

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit{
  getalldata:any;
  name:any='';
  age:any;
  email:any='';
  gender:any='';
  constructor(public s:ServisetestService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAlls();
  }
    
  getAlls(){
   this.s.getAll().subscribe((data)=>{
   
   
    this.getalldata=data
    console.log(this.getalldata);
    
  })
  }
  insertdata(username:string,age:any,email:string,gender:string){
    this.s.insertdata(username,age,email,gender).subscribe((data)=>{
    console.log(data);
      
      this.getAlls()
  })
  this.name=null;
  this.age=null;
  this.email=null;
  this.gender=null;
  }
  delete(id:number){
    this.s.delete(id).subscribe((data)=>{
      this.getAlls()
    })
  }

}
