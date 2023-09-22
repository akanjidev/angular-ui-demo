import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any> = []

  constructor() {
    this.insert({
      name: "Doe",
      email: "email.com",
      message: 'anonymous'
    })
    this.insert({
      name: "John",
      email: "email.com",
      message: 'anonymous'
    })
    this.insert({
      name: "Jane",
      email: "email.com",
      message: 'anonymous'
    })
  }

  insert(message: {name: string; email: string; message: string}):void {
    this.messages.push(message)
  }

  list():{name: string; email: string; message: string}[] {
    return this.messages
  }

  remove(index: number):void{
    this.messages.splice(index, 1)
  }
}
