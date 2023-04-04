import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
  providers: [DataService]
})
export class OrderFormComponent{

  loginForm: any = {
    name: '',
    address: '',
    phone: ''
  }
  constructor(private dataService: DataService) {
  }


  sendData(form: NgForm){
    alert("Спасибо за заказ")
    this.dataService.postData(form.value);
    form.reset()
  }
}
