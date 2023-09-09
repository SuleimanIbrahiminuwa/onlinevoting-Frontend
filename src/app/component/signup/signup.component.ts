import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private httpclient: HttpClient,
    private router: Router,
  
    ) { }


  onCreateUsers(users:{
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    password:string,
    confirmPassword:string
  }){
 
 return this.httpclient.post('http://localhost:8085/api/vote/user/register', users,{ responseType: 'text'})
 .subscribe( (response) => {
        this.router.navigate(['/login']);
      }
    );

  
  }

  

  ngOnInit(): void {
   

   
  }
  
}
