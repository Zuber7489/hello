import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jadoo',
  templateUrl: './jadoo.component.html',
  styleUrls: ['./jadoo.component.scss']
})
export class JadooComponent implements OnInit {

sata:any[]=[];
hello(val:any){
  this.sata.push({kuchbhi:val})
}



  constructor() { }

  ngOnInit(): void {
  }



}
