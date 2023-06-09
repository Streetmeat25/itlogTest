import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import {DataService} from "./services/data.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './components/modal/modal.component';
import { FormDirective } from './components/order-form/form.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    ModalComponent,
    FormDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
