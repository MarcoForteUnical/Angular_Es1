import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService1Service {

  constructor() { }


  getString() {

    console.log(' getting string from service');

      return "string from service"
  }



}
