import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {Data} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title: string = 'pizza';

  constructor(private dataService: DataService) {}



  data: any = []
  ngOnInit() {
    this.data = this.dataService.getPizzas();

    for( let pizza of this.data){
      console.log(pizza)
    }
  }
  click(){
    alert("click")
  }

}

