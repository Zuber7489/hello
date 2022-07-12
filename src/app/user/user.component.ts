import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }
@Input() item:{name:string,email:string}={name:'',email:''}
  ngOnInit(): void {
  }

}
