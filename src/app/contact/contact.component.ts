import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
})
export class ContactComponent implements OnInit {
zuberData:any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.happyApi()
  }

 happyApi(){
 return this.http.get('https://api.publicapis.org/entries').subscribe(res=>{
  this.zuberData= res;
  console.log(res,'data')
 }

 )
 }



}