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

  data: any = []
  imageSrc=''
  isClicked = false
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getPizzas();
  }
  click(event:any){
    this.isClicked = !this.isClicked
    this.imageSrc = event.target.currentSrc
  }


}

