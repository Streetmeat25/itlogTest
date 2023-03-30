import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    PizzaCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
