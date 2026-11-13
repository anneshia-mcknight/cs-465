import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
@Component({selector:'app-register',standalone:false,templateUrl:'./register.html'})
export class Register {
  name=''; email=''; password=''; error=''; saving=false;
  constructor(private auth:Authentication,private router:Router){}
  submit():void {
    if (!this.name.trim() || !this.email.trim() || !this.password) {this.error='All fields are required';return;}
    this.saving=true;this.error='';
    this.auth.register({name:this.name,email:this.email},this.password).subscribe({
      next:()=>{this.saving=false;this.router.navigateByUrl('/');},
      error:e=>{this.saving=false;this.error=e.error?.message||'Registration failed';}
    });
  }
}
