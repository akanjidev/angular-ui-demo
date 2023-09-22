import { Component } from '@angular/core';
import {MyFirstService} from "@/src/app/services/my-first.service";

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
    private service: MyFirstService
  ) {
    this.messages = service.list()
    this.isSubmitted = this.messages.length > 0
  }

  onSubmit () {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    })
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.remove(index)
  }
}
