import {Component, OnInit} from '@angular/core';

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

  inputCheck(event:any){
    this.loginForm.name = event.target.value.replace(/\./g, "")

    /*
    * if(event.targer.value содержит точку) то меняем строку*/
  }
  printForm(){
    console.log(this.loginForm)
  }
}
