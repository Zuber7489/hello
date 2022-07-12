import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }
 
//   displayVal='';
//   getValue(val:string){
//  console.log(val)
//  this.displayVal=val;
//   }

list:any[]=[];


  ngOnInit(): void {
     
  }

  addTask(item:any){

this.list.push({id:this.list.length,kuchbhi:item})

  } 

  remove(id:number){
this.list= this.list.filter(item=>item.id!==id)
  }

  

}
