import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm = new FormGroup({
         first_name: new FormControl(''),
         last_name: new FormControl(''),
         email: new FormControl('',[Validators.required, Validators.email]),
         username: new FormControl(''),
         password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })

    get first_name():FormControl{
     return this.registerForm.get('first_name')as FormControl;
}

get last_name():FormControl{
     return this.registerForm.get('last_name')as FormControl;
}

get email():FormControl{
     return this.registerForm.get('email')as FormControl;
}

get username():FormControl{
     return this.registerForm.get('username')as FormControl;
}

get password():FormControl{
     return this.registerForm.get('password')as FormControl;
}

onRegister():void{
console.log(this.registerForm.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
