import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  params = {userId: '', password: ''};

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    // this._loginService.getAuth(this.params)
    //   .subscribe((res) => {
    //     console.log(res);
        this._router.navigate(['./products']);
        console.log(this.params);
      // },(err) => {
      //   console.log(err);
      // });
  };

  loginParams(value, whichOne){
    console.log(whichOne + ':' + value);
    this.params[whichOne] = value;    
  }

}
