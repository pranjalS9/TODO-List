import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { passwordMatchValidator } from './passwordValidator';

type userType = {
  username: string,
  password: string | number,
  confirmPassword: string | number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userArray: userType[] = [];

  onSubmit(form: NgForm){
    console.log(form);
    if(form.controls['password'].value == form.controls['confirmPassword'].value){
      const newUser = {
        username: form.controls['username'].value,
        password: form.controls['password'].value,
        confirmPassword: form.controls['confirmPassword'].value
      }
      this.userArray.push(newUser);
      form.reset();
    }
    else{
      alert("Password mismatch")
    }
  }
}
