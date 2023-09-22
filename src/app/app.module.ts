import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import {MyFirstService} from "@/src/app/services/my-first.service";
import { ButtonComponent } from './components/ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
