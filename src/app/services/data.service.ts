import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any = [
    {
      image: "assets/pizzas/Layer 2.png",
      title: "Мясная Делюкс",
      description: "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы"
    },
    {
      image: "assets/pizzas/Layer 3.png",
      title: "Морская Премиум",
      description: "Перец, сыр, креветки, кальмары, мидии, лосось"
    },
    {
      image: "assets/pizzas/Layer 4.png",
      title: "Бекон и Сосиски",
      description: "Бекон, сыр, сосиски, ананас, томатная паста"
    },
    {
      image: "assets/pizzas/Layer 5.png",
      title: "Куриная Делюкс",
      description: "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста"
    },
    {
      image: "assets/pizzas/Layer 6.png",
      title: "Барбекю Премиум",
      description: "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили"
    },
    {
      image: "assets/pizzas/Layer 7.png",
      title: "Пепперони Дабл",
      description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная"
    },
    {
      image: "assets/pizzas/Layer 8.png",
      title: "Куриное трио",
      description: "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы"
    },
    {
      image: "assets/pizzas/Layer 9.png",
      title: "Сырная",
      description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный"
    }

  ];
  constructor(private http: HttpClient) { }

  getPizzas(): string {
    return this.data;
  }
  postData(body:any){
    console.log(body)
    return this.http.post('server-address', body)
  }

}
