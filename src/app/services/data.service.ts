import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string[] = ["pizza1, pizza2, pizza3"];
  constructor() { }

  getPizzas(): string[] {
    return this.data;
  }
}
