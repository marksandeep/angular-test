import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myform: any) {
    console.log(myform);
  }

}
