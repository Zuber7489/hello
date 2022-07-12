import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {
  nato:any;
  constructor(public http:HttpClient) { }

 
  
  ngOnInit(): void {
    this.getApimeta()
  }
  getApimeta(){
    return this.http.get('https://api.nationalize.io?name=nathaniel').subscribe(res=>{
this.nato=res;
console.warn(res,'data')
    })

  }
}
