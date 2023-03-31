import { Component } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent{

  loginForm: any = {
    name: '',
    address: '',
    phone: ''
  }
  printForm(){
    console.log(this.loginForm)
  }
}
