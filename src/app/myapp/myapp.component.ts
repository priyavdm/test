import { Component, OnInit } from '@angular/core';
import { ServisetestService } from "../servisetest.service";

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit{
  getalldata:any;
  id:any;
  name:any='';
  age:any=''
  email:any='';
  gender:any='';
  constructor(public s:ServisetestService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAll();
  }
    
  getAll(){
   this.s.getAll().subscribe((data)=>{
   
   
    this.getalldata=data
    console.log(this.getalldata);
    
  })
  }
  insertdata(username:string,age:any,email:string,gender:string){
    this.s.insertdata(username,age,email,gender).subscribe((data)=>{
    console.log(data);
      
      this.getAll()
  })
  this.name=null;
  this.age=null;
  this.email=null;
  this.gender=null;
  }
  delete(id:number){
    this.s.delete(id).subscribe((data)=>{
      this.getAll()
    })
  }
  edit(id:number){
    console.log(id);
    
    this.s.edit(id).subscribe ((data:any)=>
    {
      console.log(data[0]);
        this.id=id;
        this.name=data[0].username;
        this.age=data[0].age;
        this.email=data[0].email;
        this.gender=data[0].gender;
    
        
    })
  }
  update(){
    let updatesbody={
      id:this.id,
      username:this.name,
      age:this.age,
      email:this.email,
      gender:this.gender
    }
    this.s.update(updatesbody).subscribe((data)=>{
      console.log(data);
      this.getAll();
      this.name='';
      this.age='';
      this.email='';
      this.gender='';
    })
  }

}
