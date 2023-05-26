import { Component, OnInit } from '@angular/core';
import { ServisetestService } from "../servisetest.service";

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit{
  getalldata:any;
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
}
